import React from 'react';
import {useSettingsClient} from './use-settings-client';
import {ISettingsContext} from './types';

const SettingsContext = React.createContext<ISettingsContext | undefined>(undefined);

export function SettingsProvider(props: any) {
  const {updatePipeline, stepConfig, stepsStatuses, activeStep, currentTemplateId} = useSettingsClient();

  const handleSetTemplate = React.useCallback(
    (templateId: number) => {
      updatePipeline(templateId);
    },
    [updatePipeline],
  );

  const ctxValue = React.useMemo<ISettingsContext>(
    () => ({handleSetTemplate, stepsStatuses, stepConfig, activeStep, currentTemplateId}),
    [activeStep, currentTemplateId, handleSetTemplate, stepConfig, stepsStatuses],
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
