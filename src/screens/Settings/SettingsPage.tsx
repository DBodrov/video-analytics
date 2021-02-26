import React from 'react';
import {useSettings} from './SettingsContext';
import {TemplatesPage} from './TemplatesPage';
import {RulesPage} from './RulesPage';

export function SettingsPage() {
  const {activeStep} = useSettings();

  if (activeStep === 'ADD_TEMPLATE') {
    return <TemplatesPage />
  }

  if (activeStep === 'RULE_ACTIVATE') {
    return <RulesPage />
  }
  if (activeStep === 'SET_SENSOR') {
    return <div>SENSORS</div>
  }
  return null;
}
