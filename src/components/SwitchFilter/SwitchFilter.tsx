import React from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import {Span, Switch} from 'neutrino-ui';

const Filter = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 250px;
  height: 36px;
  border: 1px var(--color-border) solid;
  border-radius: 4px;
  justify-content: flex-start;
  align-items: center;
  padding: 0 5px 0 16px;
  background-color: #222c3c;
  &:hover {
    border-color: var(--color-primary);
  }
`;

type Props = {
  className?: string;
  prefix?: string;
  onToggle: (on: boolean) => void;
  on: boolean;
};

export function SwitchFilter({prefix, className, onToggle, on}: Props) {
  const toggleSwitch = React.useCallback(() => {
    onToggle(!on);
  }, [onToggle, on]);

  return (
    <Filter className={className}>
      <Span css={{color: 'var(--color-text-secondary)', fontSize: 14, marginRight: 16}}>
        {prefix}: <Span css={{fontSize: 14}}>{on ? 'Вкл' : 'Выкл'}</Span>
      </Span>
      <Switch
        on={on}
        onToggle={toggleSwitch}
        trackCss={css({marginLeft: 'auto', width: '48px', height: '24px', padding: 4})}
        buttonCss={css({width: 16, height: 16})}
      />
    </Filter>
  );
}
