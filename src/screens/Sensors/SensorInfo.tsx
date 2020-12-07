import React from 'react';
import styled from '@emotion/styled';
import {Span} from 'neutrino-ui';
import {TSensor, useCompany} from '@/context/Company';

const InfoBlock = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: calc(100% - 208px);
  padding: 10px 28px;
`;

const EventsCounts = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 55px;
  border-top: 1px var(--color-border) solid;
  margin-top: 10px;
  padding: 10px 0;
`;

type Props = {sensor: TSensor, incidentsCount: number, eventsCount: number};

export function SensorInfo({sensor, eventsCount, incidentsCount}: Props) {
  const {getLocationById} = useCompany();

  const readLocation = (locationId?: number) => {
    if (locationId) {
      return getLocationById(locationId)?.name;
    }
    return '';
  };

  return (
    <InfoBlock>
      <Span css={{fontWeight: 600}}>{sensor?.ref?.name}</Span>
      <Span css={{fontSize: 12, color: 'var(--color-text-secondary)'}}>
        URL: <Span css={{fontSize: 12, wordBreak: 'break-all'}}>{sensor?.ref?.url}</Span>
      </Span>
      <Span css={{fontSize: 12, color: 'var(--color-text-secondary)'}}>
        Расположение: <Span css={{fontSize: 12}}>{readLocation(sensor?.ref?.locationId)}</Span>
      </Span>
      <Span css={{fontSize: 12, color: 'var(--color-text-secondary)'}}>
        Правил: <Span css={{fontSize: 12}}>{sensor.metrics.activeCheckIds?.length}</Span>
      </Span>
      <EventsCounts>
        <div
          css={{
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%'
          }}
        >
          <Span css={{fontWeight: 600, fontSize: 14}}>Инцидентов за сутки</Span>
          <Span css={{fontWeight: 600, fontSize: 14, color: 'var(--color-mts)'}}>{incidentsCount ? incidentsCount : '-'}</Span>
        </div>
        <div
          css={{
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%'
          }}
        >
          <Span css={{fontWeight: 400, fontSize: 12, color: 'var(--color-text-secondary)'}}>Событий за сутки</Span>
          <Span css={{fontWeight: 400, fontSize: 12, color: 'var(--color-text-secondary)'}}>{eventsCount ? eventsCount : '-'}</Span>
        </div>
      </EventsCounts>
    </InfoBlock>
  );
}
