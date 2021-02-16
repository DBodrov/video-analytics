import React from 'react';
import {useSettings} from './SettingsContext';
import {TemplatesPage} from './TemplatesPage';

export function SettingsPage() {
  const {activeStep} = useSettings();

  if (activeStep === 'ADD_TEMPLATE') {
    return <TemplatesPage />
  }

  if (activeStep === 'RULE_ACTIVATE') {
    return <div>RULE ACTIVATE</div>
  }
  return null;
}
