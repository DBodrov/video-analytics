import React from 'react';
import {useHistory} from 'react-router-dom';
import {TEventView} from '@/context';
import {Event, List} from './styles';
import {EventThumbnail, EventInfo, EventDetection, EventStatus} from './components';

type TEventsTableProps = {
  eventsView?: TEventView[];
  isIdle: boolean;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  error?: Error;
};

export function EventsTable({eventsView, isIdle, isLoading, isError, isSuccess, error}: TEventsTableProps) {
  const history = useHistory();

  if (isIdle || isLoading) {
    return (
      <div>
        <div></div>
        <span>Получаем события...</span>
      </div>
    );
  }

  if (eventsView !== undefined && eventsView.length === 0 && isSuccess) {
    return (
      <div>
        <div></div>
        <span>Нет данных</span>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <div></div>
        <span css={{color: 'var(--color-mts)'}}>{error?.message}</span>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <List>
        {eventsView &&
          eventsView.map(event => {
            return (
              <Event
                key={event!.eventCode}
                value={event!.eventCode}
                onClick={() => {
                  history.push({pathname: '/events/details', state: {id: event!.eventCode}});
                }}
              >
                <EventThumbnail thumbnail={event!.thumbnail} />
                <EventInfo
                  check={event?.check}
                  checkCategory={event?.checkCategory}
                  locationName={event?.locationName}
                  sensorName={event?.sensorName}
                />
                <EventDetection timeStamp={event!.timestamp} />
                <EventStatus eventStatus={event!.eventStatus} />
              </Event>
            );
          })}
      </List>
    );
  }

  return <span>Unknown status</span>;
}
