import React from 'react';
import {Span} from 'neutrino-ui';
import {useSettings} from '../SettingsContext';
import {Panel, StepList} from './styles';
import {Step} from './Step';
import {TStep} from '../types';

const steps: TStep[] = ['ADD_TEMPLATE', 'RULE_ACTIVATE', 'CONFIG_RULE', 'SET_SENSOR'];

export function WorkHelper() {
  const {stepConfig, stepsStatuses} = useSettings();
  return (
    <Panel>
      <Span>Помощник в работе</Span>
      <StepList>
        {steps.map(s => {
          return (
            <Step
              key={s}
              step={s}
              status={stepsStatuses[s]}
              title={stepConfig[s].title}
              description={stepConfig[s].description}
            />
          );
        })}
      </StepList>
    </Panel>
  );
}
