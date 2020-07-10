/**@jsx jsx */
import { observer } from 'mobx-react-lite';
import { jsx } from '@emotion/core';
import { useInject } from '@/store/use-inject';
import { EventsStore } from '../events-store';
import { TEvent } from '../types';
import {EventDescription} from './EventDescription';
import {Event, List} from './styles';

const EventDetection = observer(({ timeStamp }: { timeStamp: TEvent['eventTimestamp'] }) => {
  return (
    <div css={{ display: 'flex', flexFlow: 'column nowrap', justifyContent: 'center' }}>
      <span css={{ fontSize: 14 }}>{timeStamp}</span>
      <span css={{ fontSize: 12, color: '#7F8FA4' }}>Время детекции</span>
    </div>
  );
});

const EventStatus = observer(({ statusId }: { statusId: number }) => {
  const [store] = useInject(EventsStore);
  const eventStatus = store.getEventStatus(statusId);
  return (
    <div css={{ display: 'flex', flexFlow: 'column nowrap', justifyContent: 'center' }}>
      <span css={{ fontSize: 14 }}>{eventStatus}</span>
      <span css={{ fontSize: 12, color: '#7F8FA4' }}>Статус</span>
    </div>
  );
});

function EventsListContainer() {
  const [store] = useInject(EventsStore);
  const events = store.eventsData?.events ?? [];
  const isLoading = store.loading;


  const hasEvents = events.length > 0;

  if (isLoading) {
    return (
      <Event>
        <span>Загрузка...</span>
      </Event>
    );
  }

  if (!isLoading && !hasEvents) {
    return (
      <Event>
        <span>Нет данных</span>
      </Event>
    );
  }

  return (
    <List>
      {events &&
        events.map(event => {
          return (
            <Event key={event.eventCode}>
              <div css={{ width: 82, height: 52 }}>
                <img
                  src={
                    event.thumbnail?.content ? `data:image/gif;base64, ${event?.thumbnail.content}` : 'no img'
                  }
                  css={{ maxWidth: '100%', height: 'auto', borderRadius: 4 }}
                  alt="Event thumbnail"
                />
              </div>
              <EventDescription {...event} />
              <EventDetection timeStamp={event.eventTimestamp} />
              <EventStatus statusId={event.statusId} />
            </Event>
          );
        })}
    </List>
  );
}

export const EventsList = observer(EventsListContainer);
