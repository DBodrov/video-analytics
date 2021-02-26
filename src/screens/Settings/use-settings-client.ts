import React from 'react';
import {PipelinesGetResponse200FromJSON} from '@/backend/main';
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
  currentChecksIds: [],
  currentSensorsIds: undefined,
  pipelines: undefined,
};

const settingsReducer = (state: TSettingsState, changes: Partial<TSettingsState>): TSettingsState => {
  console.log('dispatch', changes);
  return {
    ...state,
    ...changes,
  };
};

export function useSettingsClient() {
  const [
    {
      step,
      stepStatus,
      stepConfig,
      status,
      enabledTemplatesIds,
      currentTemplateId,
      stepsStatuses,
      pipelines,
      currentChecksIds,
      currentSensorsIds,
    },
    dispatch,
  ] = React.useReducer(settingsReducer, initState);
  const {companyId, authHeader} = useAuth();
  const fetchClient = useFetch();

  // const fetchPipelines = fetchClient(`/api/va/companies/${companyId}/pipelines`, {headers});
  const fetchPipelines = React.useCallback(() => {
    dispatch({status: 'pending'});
    fetchClient(`/api/va/companies/${companyId}/pipelines`, {headers: authHeader}).then(
      response => {
        const pipelines = PipelinesGetResponse200FromJSON(response).pipelines;
        dispatch({status: 'resolved', pipelines});
      },
      error => {
        dispatch({status: 'rejected'});
      },
    );
  }, [authHeader, companyId, fetchClient]);

  const updatePipeline = React.useCallback(
    (templateId: number, needEnable: boolean) => {
      dispatch({status: 'pending'});
      fetchClient(`/api/va/companies/${companyId}/pipelines/${templateId}`, {
        method: 'PUT',
        headers: authHeader,
        body: {enabled: needEnable},
      }).then(
        response => {
          //const needEnabled = !enabledTemplatesIds.includes(templateId);
          const updateEnabledTemplates = needEnable
            ? [...enabledTemplatesIds, templateId]
            : enabledTemplatesIds.filter(id => id !== templateId);

          const updateSteps: TStepsStatuses = {
            ...stepsStatuses,
            ADD_TEMPLATE: needEnable ? 'done' : 'active',
            RULE_ACTIVATE: needEnable ? 'active' : 'inactive',
          };
          dispatch({
            status: 'resolved',
            currentTemplateId: templateId,
            enabledTemplatesIds: updateEnabledTemplates,
            stepsStatuses: updateSteps,
          });
          fetchPipelines();
        },
        error => {
          dispatch({status: 'rejected'});
          //console.log(error);
        },
      );
    },
    [authHeader, companyId, enabledTemplatesIds, fetchClient, fetchPipelines, stepsStatuses],
  );

  const setCheckId = React.useCallback(
    (checkId: number, isSelected: boolean) => {
      let updateChecksIds: number[] | undefined;
      if (isSelected) {
        if (currentChecksIds.includes(checkId)) {
          return;
        } else {
          updateChecksIds = [...currentChecksIds, checkId];
        }
      } else {
        updateChecksIds = currentChecksIds.filter(id => id !== checkId);
      }
      dispatch({currentChecksIds: updateChecksIds});
    },
    [currentChecksIds],
  );

  const openSensorSettings = React.useCallback(
    (ruleId?: number) => {
      if (ruleId) {
        dispatch({
          currentChecksIds: [ruleId],
          stepsStatuses: {...stepsStatuses, RULE_ACTIVATE: 'inactive', SET_SENSOR: 'active'},
        });
      } else {
        dispatch({stepsStatuses: {...stepsStatuses, RULE_ACTIVATE: 'inactive', SET_SENSOR: 'active'}});
      }
    },
    [stepsStatuses],
  );

  const setSensorId = React.useCallback(
    (sensorId: number) => {
      let updateSensorsIds: number[] | undefined;
      if (currentSensorsIds?.includes(sensorId)) {
        updateSensorsIds = currentSensorsIds.filter(id => id !== sensorId);
      } else if (currentSensorsIds) {
        updateSensorsIds = [...currentSensorsIds, sensorId];
      }
      dispatch({currentChecksIds: updateSensorsIds});
    },
    [currentSensorsIds],
  );

  return {
    fetchPipelines,
    updatePipeline,
    setCheckId,
    setSensorId,
    openSensorSettings,
    currentTemplateId,
    currentChecksIds,
    currentSensorsIds,
    step,
    pipelines,
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
