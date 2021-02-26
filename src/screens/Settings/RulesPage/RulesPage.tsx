import React from 'react';
import {H6, Span} from 'neutrino-ui';
import {useRefs} from '@/context';
import {useSettings} from '../SettingsContext';
import {useRulesClient} from './use-rules-client';
import {Section} from '../styles';
import {Rule} from './Rule';
import {RulesBlock, RulesHeader, RulesTableRow, RulesTableCell} from './styles';

export function RulesPage() {
  const {currentTemplateId, pipelines, setCheckId, currentChecksIds, openSensorSettings} = useSettings();
  const {fetchRulesByTemplateId, pipelineChecks, updateRule} = useRulesClient();
  const {getCheckCategoryById, getCheckById} = useRefs();
  const category = getCheckCategoryById(currentTemplateId);

  const getSensorCount = React.useCallback(
    (pipelineId: number) => {
      return pipelines?.find(p => p.id === pipelineId)?.bySensor.length;
    },
    [pipelines],
  );

  const handleSelectRule = React.useCallback(
    (checkId: number, isSelected: boolean) => {
      setCheckId(checkId, isSelected);
    },
    [setCheckId],
  );

  const handleGoToSensorsSettings = React.useCallback(() => {
    openSensorSettings();
  }, [openSensorSettings])

  React.useEffect(() => {
    if (currentTemplateId && !pipelineChecks) {
      fetchRulesByTemplateId(currentTemplateId);
    }
  }, [currentTemplateId, fetchRulesByTemplateId, pipelineChecks]);

  return (
    <Section>
      <RulesBlock>
        <RulesHeader>
          <H6 css={{fontSize: 18, fontWeight: 400}}>{category?.name}</H6>
          <Span css={{fontSize: 12, color: 'var(--color-text-secondary)', paddingTop: 5}}>
            Доп.информация
          </Span>
        </RulesHeader>
        <RulesTableRow>
          <RulesTableCell></RulesTableCell>
          <RulesTableCell>
            <Span css={{fontSize: 14, color: 'var(--color-text-secondary)'}}>Бизнес-правила</Span>
          </RulesTableCell>
          <RulesTableCell css={{justifyContent: 'center'}}>
            <Span css={{fontSize: 14, color: 'var(--color-text-secondary)'}}>Камеры</Span>
          </RulesTableCell>
          <RulesTableCell css={{justifyContent: 'center'}}>
            <Span css={{fontSize: 14, color: 'var(--color-text-secondary)'}}>Статус</Span>
          </RulesTableCell>
          <RulesTableCell></RulesTableCell>
          <RulesTableCell></RulesTableCell>
        </RulesTableRow>
        <div>
          {pipelineChecks?.map(check => {
            return (
              <Rule
                key={check.checkId}
                check={getCheckById(check.checkId)}
                enabled={check.enabled}
                pipelineId={check.pipelineId}
                sensorCount={getSensorCount(check.pipelineId)}
                onUpdate={updateRule}
                onSelect={handleSelectRule}
                isSelected={currentChecksIds?.includes(check.checkId) ?? false}
              />
            );
          })}
        </div>
        <div
          css={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            height: 50,
            width: '100%',
            borderTop: '1px var(--color-border) solid',
            padding: '30px 16px'
          }}
        >
          <button
            css={{
              border: 0,
              outline: 0,
              backgroundColor: 'transparent',
              color:
                currentChecksIds && currentChecksIds?.length > 0
                  ? 'var(--color-text)'
                  : 'var(--color-text-secondary)',
              fontSize: 14
            }}
            onClick={handleGoToSensorsSettings}
          >{`Настроить выделенные (${
            currentChecksIds && currentChecksIds?.length > 0 ? currentChecksIds?.length : ''
          }) >>`}</button>
        </div>
      </RulesBlock>
    </Section>
  );
}
