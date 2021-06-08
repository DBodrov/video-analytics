import React from 'react';
import {useSettingsClient} from './use-settings-client';
import {ISettingsContext} from './types';

const SettingsContext = React.createContext<ISettingsContext | undefined>(undefined);

export function SettingsProvider(props: any) {
  const {
    updatePipeline,
    stepsStatuses,
    activeStep,
    currentTemplateId,
    setCheckId,
    setSensorId,
    currentChecksIds,
    currentSensorsIds,
    fetchPipelines,
    pipelines,
    openSensorSettings,
    openRuleEditor,
  } = useSettingsClient();

  const handleSetTemplate = React.useCallback(
    (templateId: number, needEnable: boolean) => {
      updatePipeline(templateId, needEnable);
    },
    [updatePipeline],
  );

  React.useEffect(() => {
    if (!pipelines) {
      fetchPipelines();
    }
  }, [fetchPipelines, pipelines]);

  const ctxValue = React.useMemo<ISettingsContext>(
    () => ({
      handleSetTemplate,
      pipelines,
      fetchPipelines,
      stepsStatuses,
      activeStep,
      currentTemplateId,
      setCheckId,
      setSensorId,
      currentChecksIds,
      currentSensorsIds,
      openSensorSettings,
      openRuleEditor,
    }),
    [
      activeStep,
      currentChecksIds,
      currentSensorsIds,
      currentTemplateId,
      fetchPipelines,
      handleSetTemplate,
      openRuleEditor,
      openSensorSettings,
      pipelines,
      setCheckId,
      setSensorId,
      stepsStatuses,
    ],
  );

  return <SettingsContext.Provider value={ctxValue} {...props} />;
}

export function useSettings() {
  const context = React.useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}
