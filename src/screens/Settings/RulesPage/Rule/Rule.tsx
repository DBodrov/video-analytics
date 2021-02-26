import React from 'react';
import {css} from '@emotion/react';
import {Switch, Span, Checkbox} from 'neutrino-ui';
import {TCheck} from '@/context/Refs/types';
import {RulesTableRow, RulesTableCell} from '../styles';

type Props = {
  check?: TCheck;
  enabled: boolean;
  sensorCount?: number;
  pipelineId?: number;
  onUpdate: (pipelineId: number, checkId: number, enabled: boolean) => void;
  onSelect: (ruleId: number, isSelected: boolean) => void;
  isSelected: boolean;
};

export function Rule(props: Props) {
  const {check, enabled, sensorCount, pipelineId, onUpdate, onSelect, isSelected} = props;

  const handleToggleRule = React.useCallback(() => {
    if (pipelineId && check && check.hasOwnProperty('id')) {
      onUpdate(pipelineId, check.id, !enabled);
    }
  }, [check, enabled, onUpdate, pipelineId]);

  const handleSelect = React.useCallback(
    (toSetup: boolean) => {
      if (check) {
        onSelect(check.id, toSetup);
      }
    },
    [check, onSelect],
  );

  return (
    <RulesTableRow>
      <RulesTableCell css={{padding: '0 10px'}}>
        <Switch
          on={enabled}
          onToggle={handleToggleRule}
          trackCss={css({marginLeft: 'auto', width: '48px', height: '24px', padding: 4})}
          buttonCss={css({width: 16, height: 16})}
        />
      </RulesTableCell>
      <RulesTableCell>
        <Span css={{fontSize: 14, fontWeight: 600}}>{check?.name}</Span>
      </RulesTableCell>
      <RulesTableCell css={{justifyContent: 'center'}}>
        <Span>{sensorCount ?? '-'}</Span>
      </RulesTableCell>
      <RulesTableCell css={{justifyContent: 'center'}}>status</RulesTableCell>
      <RulesTableCell>настроить</RulesTableCell>
      <RulesTableCell>
        <Checkbox
          onChangeHandler={handleSelect}
          width="16px"
          height="16px"
          boxStyles={{backgroundColor: isSelected ? 'var(--color-box)' : 'var(--color-content)'}}
          checked={isSelected}
          variant="primary"
        />
      </RulesTableCell>
    </RulesTableRow>
  );
}
