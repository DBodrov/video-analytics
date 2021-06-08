import React from 'react';
import styled from '@emotion/styled';
import {Span} from 'neutrino-ui';
import {FlagIcon, CircleWarningIcon} from '@/assets/icons';
import {correctRusCase} from '@/utils';
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
};

export function DayStats({stats}: Props) {
  const eventsCount = () =>
    stats?.reduce((events, stat) => {
      return events + stat.events;
    }, 0);
  const incidentsCount = () =>
    stats?.reduce((incidents, stat) => {
      return incidents + stat.incidents;
    }, 0);
  return (
    <div css={{padding: '10px 0px 10px 30px', border: '1px var(--color-border) solid'}}>
      <Span css={{fontSize: 14}}>Статистика за сутки</Span>
      <ul css={{margin: 0, padding: '10px 0'}}>
        <StatsItem>
          <FlagIcon fill="#269BF3" />
          <Span css={{fontSize: 14, paddingLeft: 14}}>
            {eventsCount()}{' '}
            <Span css={{color: 'var(--color-text-secondary)'}}>
              {correctRusCase(eventsCount() ?? 0, 'событие', 'события', 'событий')}
            </Span>{' '}
          </Span>
        </StatsItem>
        <StatsItem>
          <CircleWarningIcon fill="#269BF3" />
          <Span css={{fontSize: 14, paddingLeft: 14}}>
            {incidentsCount()}{' '}
            <Span css={{color: 'var(--color-text-secondary)'}}>
              {correctRusCase(incidentsCount() ?? 0, 'инцидент', 'инцидента', 'инцидентов')}
            </Span>{' '}
          </Span>
        </StatsItem>
      </ul>
    </div>
  );
}
