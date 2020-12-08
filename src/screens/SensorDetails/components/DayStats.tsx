import React from 'react';
import styled from '@emotion/styled';
import {Span} from 'neutrino-ui';
import {FlagIcon, CircleWarningIcon} from '@/assets/icons';
import {TSensorStats} from '../types';

const StatsItem = styled.li`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  margin: 0 0 10px 0;
  padding: 0;
`;

type Props = {
  stats?: TSensorStats[];
}

export function DayStats({stats}: Props) {

  const eventsCount = Boolean(stats) && stats!.length > 0 ? stats![0].events : 0;
  const incidentsCount = Boolean(stats) && stats!.length > 0 ? stats![0].incidents : 0;
  return (
    <div css={{padding: '10px 0px 10px 30px', border: '1px var(--color-border) solid'}}>
      <Span css={{fontSize: 14}}>Статистика за сутки</Span>
      <ul css={{margin: 0, padding: '10px 0'}}>
        <StatsItem>
          <FlagIcon fill="#269BF3"/>
          <Span css={{fontSize: 14, paddingLeft: 14}}>{eventsCount}{' '}<Span css={{color: 'var(--color-text-secondary)'}}>событий</Span> </Span>
        </StatsItem>
        <StatsItem>
          <CircleWarningIcon fill="#269BF3"/>
          <Span css={{fontSize: 14, paddingLeft: 14}}>{incidentsCount}{' '}<Span css={{color: 'var(--color-text-secondary)'}}>инцидентов</Span> </Span>
        </StatsItem>

      </ul>
    </div>
  );
}
