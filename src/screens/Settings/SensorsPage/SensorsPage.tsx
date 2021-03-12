import React from 'react';
import {H6, Span} from 'neutrino-ui';
import {useCompany} from '@/context';
import {LinkButton} from '@/components';
import {useSettings} from '../SettingsContext';
import {Sensor} from './Sensor';
import {useSensorsSettings} from './use-sensors-settings';
import {Section, SectionBlock, SectionHeader, SectionFooter} from '../styles';
import {EmptySensors} from './EmptySensors';
import {SensorsTableRow, SensorsTableCell} from './styles';

export function SensorsPage() {
  const {pipelines, currentTemplateId, currentSensorsIds, setSensorId, openRuleEditor} = useSettings();
  const {getSensorById} = useCompany();
  const {toggleSensor} = useSensorsSettings();
  const sensorsList = pipelines && pipelines.find(p => p.id === currentTemplateId)?.bySensor;
  const hasSelectedSensors = currentSensorsIds && currentSensorsIds?.length > 0;

  return (
    <Section>
      <SectionBlock>
        <SectionHeader css={{flexFlow: 'row nowrap'}}>
          <div css={{display: 'flex', flexFlow: 'column nowrap'}}>
            <H6 css={{fontSize: 18, fontWeight: 400}}>Выберите камеры</H6>
            <Span css={{fontSize: 12, color: 'var(--color-text-secondary)', paddingTop: 5}}>
              Подключите камеры для правил и сохраните настройки
            </Span>
          </div>
          <div css={{display: 'flex', flexFlow: 'row nowrap', marginLeft: 'auto'}}></div>
        </SectionHeader>
        {sensorsList ? (
          <>
            <SensorsTableRow>
              <SensorsTableCell></SensorsTableCell>
              <SensorsTableCell>
                <Span css={{fontSize: 14, fontWeight: 600, color: 'var(--color-text-secondary)'}}>
                  Название камеры и местоположение
                </Span>
              </SensorsTableCell>
              <SensorsTableCell>
                <Span css={{fontSize: 14, fontWeight: 600, color: 'var(--color-text-secondary)'}}>
                  IP адрес
                </Span>
              </SensorsTableCell>
              <SensorsTableCell>
                <Span css={{fontSize: 14, fontWeight: 600, color: 'var(--color-text-secondary)'}}>
                  Статус
                </Span>
              </SensorsTableCell>
              <SensorsTableCell>
                <Span css={{fontSize: 14, fontWeight: 600, color: 'var(--color-text-secondary)'}}>
                  Площадка
                </Span>
              </SensorsTableCell>
            </SensorsTableRow>
            {sensorsList.map(sensor => {
              return (
                <Sensor
                  key={sensor.id}
                  sensorInfo={getSensorById(sensor.id)}
                  isSelected={currentSensorsIds?.includes(sensor.id) ?? false}
                  onSelect={setSensorId}
                  onUpdate={toggleSensor}
                />
              );
            })}
            <SectionFooter>
              <LinkButton
                css={{
                  color: hasSelectedSensors ? 'var(--color-text)' : 'var(--color-text-secondary)',
                  fontSize: 14,
                }}
                onClick={hasSelectedSensors ? openRuleEditor : undefined}
              >{`Настроить выделенные ${
                hasSelectedSensors ? `(${currentSensorsIds?.length})` : ''
              } >>`}</LinkButton>
            </SectionFooter>
          </>
        ) : (
          <EmptySensors />
        )}
      </SectionBlock>
    </Section>
  );
}
