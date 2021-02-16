import React from 'react';
import {useFetch} from '@/utils';
import {useAuth} from '@/context';
import {stepsConfig} from './utils';
import {TSettingsState, TStepsStatuses, TStep} from './types';

const initState: TSettingsState = {
  status: 'idle',
  step: 'ADD_TEMPLATE',
  stepStatus: 'active',
  stepsStatuses: {
    ADD_TEMPLATE: 'active',
    CONFIG_RULE: 'inactive',
    RULE_ACTIVATE: 'inactive',
    SET_SENSOR: 'inactive',
  },
  stepConfig: stepsConfig,
  enabledTemplatesIds: [],
  currentTemplateId: undefined,
};

const settingsReducer = (state: TSettingsState, changes: Partial<TSettingsState>): TSettingsState => {
  return {
    ...state,
    ...changes,
  };
};

export function useSettingsClient() {
  const [
    {step, stepStatus, stepConfig, status, enabledTemplatesIds, currentTemplateId, stepsStatuses},
    dispatch,
  ] = React.useReducer(settingsReducer, initState);
  const {companyId, authHeader} = useAuth();
  const fetchClient = useFetch();

  const updatePipeline = React.useCallback(
    (templateId: number) => {
      dispatch({status: 'pending'});
      fetchClient(`/api/va/companies/${companyId}/pipelines/${templateId}`, {
        method: 'PUT',
        headers: authHeader,
      }).then(
        response => {
          const needEnabled = !enabledTemplatesIds.includes(templateId);
          const updateEnabledTemplates = needEnabled
            ? [...enabledTemplatesIds, templateId]
            : enabledTemplatesIds.filter(id => id !== templateId);

          const updateSteps: TStepsStatuses = {
            ...stepsStatuses,
            ADD_TEMPLATE: needEnabled ? 'done' : 'active',
            RULE_ACTIVATE: needEnabled ? 'active' : 'inactive',
          };
          dispatch({
            status: 'resolved',
            currentTemplateId: templateId,
            enabledTemplatesIds: updateEnabledTemplates,
            stepsStatuses: updateSteps,
          });
        },
        error => {
          dispatch({status: 'rejected'});
          //console.log(error);
        },
      );
    },
    [authHeader, companyId, enabledTemplatesIds, fetchClient, stepsStatuses],
  );

  return {
    updatePipeline,
    currentTemplateId,
    step,
    stepStatus,
    stepConfig,
    stepsStatuses,
    activeStep: Object.keys(stepsStatuses).find(s => stepsStatuses[s as TStep] === 'active') as TStep,

    isLoading: status === 'pending',
    isIdle: status === 'idle',
    isSuccess: status === 'resolved',
    isError: status === 'rejected',
  };
}
