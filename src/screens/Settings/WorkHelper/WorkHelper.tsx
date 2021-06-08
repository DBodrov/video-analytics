import React from 'react';
import {Span} from 'neutrino-ui';
import {useRefs} from '@/context/Refs';
import {useSettings} from '../SettingsContext';
import {Panel, StepList} from './styles';
import {Step} from './Step';
import {TStep} from '../types';

const steps: TStep[] = ['ADD_TEMPLATE', 'RULE_ACTIVATE', 'SET_SENSOR', 'CONFIG_RULE'];

export function WorkHelper() {
  const {stepsStatuses, currentTemplateId} = useSettings();
  const {getCheckCategoryById} = useRefs();
  const template = getCheckCategoryById(currentTemplateId);
  const stepsConfig = React.useMemo(
    () => [
      {
        step: 'ADD_TEMPLATE',
        done: {title: 'Шаблон добавлен', description: `Выбран шаблон ${template?.name}`},
        active: {title: 'Добавьте шаблон', description: 'Для настройки добавьте бизнес-шаблон'},
        inactive: {title: 'Добавьте шаблон', description: 'Для настройки добавьте бизнес-шаблон'}
      },
      {
        step: 'RULE_ACTIVATE',
        done: {title: 'Правила активированы', description: 'Выбран набор правил'},
        active: {title: 'Активируйте правило', description: 'Перейдите к настройке правил'},
        inactive: {title: 'Активируйте правило', description: 'Перейдите к настройке правил'},
      },
      {
        step: 'SET_SENSOR',
        done: {title: 'Камера выбрана', description: 'Камеры для анализа добавлены'},
        active: {title: 'Выберите камеру', description: 'Добавьте камеры для анализа'},
        inactive: {title: 'Выберите камеру', description: 'Добавьте камеры для анализа'},
      },
      {
        step: 'CONFIG_RULE',
        done: {title: 'Правила настроены', description: 'Разметка и информирование установлены для правил'},
        active: {title: 'Настройте правило', description: 'Донастройте правила'},
        inactive: {title: 'Настройте правило', description: 'Донастройте правила'},
      },
    ],
    [template?.name],
  );

  const readStepConfig = React.useCallback((step: TStep) => {
    const status = stepsStatuses[step];
    const currentConfig = stepsConfig.find(config => config.step === step);
    return {
      status,
      title: currentConfig![status].title,
      description: currentConfig![status].description
    }
  }, [stepsConfig, stepsStatuses]);


  return (
    <Panel>
      <Span>Помощник в работе</Span>
      <StepList>
        {steps.map(s => {
          return (
            <Step
              key={s}
              step={s}
              status={readStepConfig(s).status}
              title={readStepConfig(s).title}
              description={readStepConfig(s).description}
            />
          );
        })}
      </StepList>
    </Panel>
  );
}
