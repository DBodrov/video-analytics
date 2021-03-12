import React from 'react';
import {PipelinesGetResponse200FromJSON} from '@/backend/main';
import {useFetch} from '@/utils';
import {useAuth} from '@/context';
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
  enabledTemplatesIds: [],
  currentTemplateId: undefined,
  currentChecksIds: [],
  currentSensorsIds: [],
  pipelines: undefined,
};

const settingsReducer = (state: TSettingsState, changes: Partial<TSettingsState>): TSettingsState => {
  // console.log('dispatch', changes);
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

  const toggleSensor = React.useCallback(
    (sensorId: number, isEnabled: boolean) => {
      dispatch({status: 'pending'});
      const updaters = currentChecksIds.map(checkId => {
        return fetchClient(
          `/api/va/companies/${companyId}/pipelines/${currentTemplateId}/sensors/${sensorId}/checks/${checkId}`,
          {
            method: 'patch',
            headers: authHeader,
            body: {
              enabled: isEnabled,
            },
          },
        );
      });
      Promise.all(updaters).then(
        () => {
          dispatch({status: 'resolved'});
          fetchPipelines();
        },
        error => dispatch({status: 'rejected'}),
      );
    },
    [authHeader, companyId, currentChecksIds, currentTemplateId, fetchClient, fetchPipelines],
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
          stepsStatuses: {...stepsStatuses, RULE_ACTIVATE: 'done', SET_SENSOR: 'active'},
        });
      } else {
        dispatch({stepsStatuses: {...stepsStatuses, RULE_ACTIVATE: 'done', SET_SENSOR: 'active'}});
      }
    },
    [stepsStatuses],
  );

  const openRuleEditor = React.useCallback(() => {
    dispatch({stepsStatuses: {...stepsStatuses, SET_SENSOR: 'done', CONFIG_RULE: 'active'}});
  }, [stepsStatuses]);

  const setSensorId = React.useCallback(
    (sensorId: number, isSelected: boolean) => {
      let updateSensorsIds: number[] | undefined;
      if (isSelected) {
        if (currentSensorsIds.includes(sensorId)) {
          return;
        } else {
          updateSensorsIds = [...currentSensorsIds, sensorId];
        }
      } else if (!isSelected) {
        updateSensorsIds = currentSensorsIds.filter(id => id !== sensorId);
      }
      dispatch({currentSensorsIds: updateSensorsIds});
    },
    [currentSensorsIds],
  );

  return {
    fetchPipelines,
    updatePipeline,
    toggleSensor,
    setCheckId,
    setSensorId,
    openSensorSettings,
    openRuleEditor,
    currentTemplateId,
    currentChecksIds,
    currentSensorsIds,
    step,
    pipelines,
    stepStatus,
    stepsStatuses,
    activeStep: Object.keys(stepsStatuses).find(s => stepsStatuses[s as TStep] === 'active') as TStep,

    isLoading: status === 'pending',
    isIdle: status === 'idle',
    isSuccess: status === 'resolved',
    isError: status === 'rejected',
  };
}
