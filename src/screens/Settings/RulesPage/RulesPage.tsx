import React from 'react';
import {H6, Span} from 'neutrino-ui';
import {useRefs} from '@/context';
import {useSettings} from '../SettingsContext';
import {Section} from '../styles';
import {RulesBlock, RulesHeader, RulesTableRow, RulesTableCell} from './styles';

export function RulesPage() {
  const {currentTemplateId} = useSettings();
  const {getCheckCategoryById} = useRefs();
  const category = getCheckCategoryById(currentTemplateId);
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
          <RulesTableCell css={{alignItems: 'center'}}>
            <Span css={{fontSize: 14, color: 'var(--color-text-secondary)'}}>Камеры</Span>
          </RulesTableCell>
          <RulesTableCell css={{alignItems: 'center'}}>
            <Span css={{fontSize: 14, color: 'var(--color-text-secondary)'}}>Статус</Span>
          </RulesTableCell>
          <RulesTableCell></RulesTableCell>
          <RulesTableCell></RulesTableCell>
        </RulesTableRow>
      </RulesBlock>
    </Section>
  );
}
