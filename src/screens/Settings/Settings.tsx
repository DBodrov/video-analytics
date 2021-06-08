import React from 'react';
import {AppLayout} from '../Layouts';
import {SettingsProvider} from './SettingsContext';
import {WorkHelper} from './WorkHelper';
import {SettingsPage} from './SettingsPage';
import {SettingsLayout, HelperPanel} from './styles';

export function Settings() {
  return (
    <AppLayout>
      <SettingsProvider>
        <SettingsLayout>
          <SettingsPage />
          <HelperPanel>
            <WorkHelper />
          </HelperPanel>
        </SettingsLayout>
      </SettingsProvider>
    </AppLayout>
  );
}
