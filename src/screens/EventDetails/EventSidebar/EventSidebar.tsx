import React from 'react';
import {List, EventBox, EventInfo} from './styles';
import {TEventView} from '../types';

type Props = {
  eventsList: TEventView[];
};

const formatTimestamp = (timestamp?: string) => {
  if (!timestamp) return;
  const date = new Date(timestamp);

  const hours = date.getHours();
  const minutes = date.getMinutes();

  const day = date.toLocaleDateString('ru', {year: 'numeric', month: 'long', day: 'numeric'});
  const result = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}, ${day}`;
  return result;
};

export function EventSidebar({eventsList}: Props) {
  return (
    <List>
      {eventsList.map(event => {
        return (
          <EventBox key={event.eventCode}>
            <div
              css={{
                minWidth: 130,
                height: 80,
              }}
            >
              <img src={event.thumbnail} width="100%" height="100%" alt="thumb" css={{borderRadius: 4}} />
            </div>
            <EventInfo>
              <span>{event.checkCategory}</span>
              <span css={{fontSize: 12, color: 'var(--color-text-secondary)'}}>
                {formatTimestamp(event.timestamp)}
              </span>
              <span css={{fontSize: 12, color: 'var(--color-text-secondary)'}}>{event.check}</span>
              <span css={{fontSize: 12, color: 'var(--color-text-secondary)'}}>{event.sensorName}</span>
            </EventInfo>
          </EventBox>
        );
      })}
    </List>
  );
}
