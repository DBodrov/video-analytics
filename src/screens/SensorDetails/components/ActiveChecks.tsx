import React from 'react';
import styled from '@emotion/styled';
import {Span} from 'neutrino-ui';
import {CircleCheckIcon} from '@/assets/icons';

const CheckItem = styled.li`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export function ActiveChecks() {
  return (
    <div css={{padding: '10px 0px 10px 30px', border: '1px var(--color-border) solid'}}>
      <Span css={{fontSize: 14}}>Активные правила</Span>
      <ul css={{margin: 0, padding: '10px 0'}}>
        <CheckItem>
          <CircleCheckIcon />
          <Span css={{paddingLeft: 14, fontSize: 14}}>Active check block</Span>
        </CheckItem>
      </ul>
    </div>
  );
}
