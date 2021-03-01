import React from 'react';
import {css} from '@emotion/react';
import {Switch, Span, Checkbox} from 'neutrino-ui';
import {TCheck} from '@/context/Refs/types';
import {PlayerStopIcon} from '@/assets/icons';
import {RulesTableRow, RulesTableCell} from '../styles';

type Props = {
  check?: TCheck;
  enabled: boolean;
  sensorCount?: number;
  pipelineId?: number;
  onUpdate: (pipelineId: number, checkId: number, enabled: boolean) => void;
  onSelect: (ruleId: number, isSelected: boolean) => void;
  onSetup: (ruleId: number) => void;
  isSelected: boolean;
};

export function Rule(props: Props) {
  const {check, enabled, sensorCount, pipelineId, onUpdate, onSelect, onSetup, isSelected} = props;

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

  const handleRuleSetup = React.useCallback(() => {
    if(check) {
      onSetup(check.id);
    }
  }, [check, onSetup]);

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
      <RulesTableCell>
        <button
          css={{
            display: 'flex',
            flexFlow: 'row nowrap',
            width: '100%',
            justifyContent: 'flex-start',
            alignItems: 'center',
            cursor: 'pointer',
            border: 0,
            outline: 0,
            backgroundColor: 'transparent',
          }}
          onClick={handleRuleSetup}
        >
          <PlayerStopIcon css={{marginRight: 10}}/>
          <Span css={{fontSize: 14, fontWeight: 600, color: '#686F7B'}}>Настроить</Span>
        </button>
      </RulesTableCell>
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
