import React from 'react';
import {useHistory} from 'react-router-dom';
import {EventsList, EventBox, EventInfo, EventSidebarWrapper} from './styles';
import {IOccurrenceView} from '../types';
import {LabelSidebar} from './LabelSidebar';
import {useTimelines} from '../TimelineContext';

type Props = {
  eventsList?: IOccurrenceView[];
  viewType?: 'events' | 'incidents';
  eventId?: string;
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

export function EventSidebar({eventsList, viewType, eventId}: Props) {
  const history = useHistory();
  const {setIdleStatus, setUnableClickSidebar} = useTimelines();

  const colorCountBorder = (prevEventId: number | string) =>
    String(prevEventId) === String(eventId) ? '#2EA1F8' : 'none';

  const eventBoxBackgroundColor = (prevEventId: number | string) =>
    String(prevEventId) === String(eventId) ? '#364357' : 'none';

  const eventBoxHandleClick = (eventId: string | number) => {
    setIdleStatus();
    setUnableClickSidebar();
    history.push({
      pathname: '/events/details',
      state: {
        eventId: eventId,
        viewType,
      },
    });
  };

  return (
    <EventSidebarWrapper>
      <LabelSidebar viewType={viewType} />
      <EventsList>
        {eventsList
          ? eventsList.map(event => {
              return (
                <EventBox
                  css={{
                    backgroundColor: `${eventBoxBackgroundColor(event.eventId)}`,
                  }}
                  key={event.id}
                  onClick={() => eventBoxHandleClick(event.eventId)}
                >
                  <div
                    css={{
                      minWidth: 130,
                      height: 78,
                      border: `2px ${colorCountBorder(event.eventId)} solid`,
                      borderRadius: '4px',
                      boxSizing: 'border-box',
                    }}
                  >
                    <img
                      src={event.thumbnail}
                      width="100%"
                      height="100%"
                      alt="thumb"
                      css={{borderRadius: 4}}
                    />
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
            })
          : null}
      </EventsList>
    </EventSidebarWrapper>
  );
}
