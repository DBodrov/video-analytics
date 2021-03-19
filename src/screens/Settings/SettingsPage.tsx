import React from 'react';
import {useSettings} from './SettingsContext';
import {TemplatesPage} from './TemplatesPage';
import {RulesPage} from './RulesPage';
import {SensorsPage} from './SensorsPage';
import {MarkupEditPage} from './MarkupEditPage';

export function SettingsPage() {
  const {activeStep} = useSettings();

  if (activeStep === 'ADD_TEMPLATE') {
    return <TemplatesPage />
  }

  if (activeStep === 'RULE_ACTIVATE') {
    return <RulesPage />
  }
  if (activeStep === 'SET_SENSOR') {
    return <SensorsPage />
  }
  if (activeStep === 'CONFIG_RULE') {
    return <MarkupEditPage />
  }
  return null;
}
