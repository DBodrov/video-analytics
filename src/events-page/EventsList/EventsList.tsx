/**@jsx jsx */
import React, { useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/core';
import { useInject } from '@/store/use-inject';
import { EventsStore } from '../events-store';
import thumb from './__mock__/event_thumb.jpg';
import { TEvents, TEvent } from '../types';

const List = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  background-color: #273142;
  border-radius: 4px;
`;

const Event = styled.li`
  display: grid;
  grid-template: 1fr / 82px minmax(300px, 1fr) minmax(100px, 1fr) minmax(100px, 1fr) 1fr;
  column-gap: 30px;
  width: 100%;
  height: 80px;
  padding: 14px;
  border-bottom: 1px #313d4f solid;
`;

const EventDescription = observer((props: TEvent) => {
  const [store] = useInject(EventsStore);
  // const {eventDescriptionData} = store;
  const description = store.eventDescriptionData(props);

  return (
    <div css={{ display: 'flex', flexFlow: 'column nowrap' }}>
      <span css={{ fontSize: 16, fontWeight: 600, lineHeight: '20px' }}>{description.title}</span>
      <div css={{ display: 'flex', flexFlow: 'row nowrap', color: '#7F8FA4' }}>
        <span css={{ fontSize: 12 }}>{description.sensor}</span>
        <span css={{ padding: '0 4px' }}>|</span>
        <span css={{ fontSize: 12 }}>Площадка: </span>
        <span css={{ fontSize: 12, color: '#fff', textDecoration: 'underline', paddingLeft: 4 }}>
          {description.location}
        </span>
      </div>
      <div css={{ display: 'flex', flexFlow: 'row nowrap', color: '#7F8FA4' }}>
        <span css={{ fontSize: 12 }}>Шаблон: </span>
        <span css={{ fontSize: 12, color: '#fff', textDecoration: 'underline', paddingLeft: 4 }}>
          {description.template}
        </span>
      </div>
    </div>
  );
});

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
  // const {eventDescriptionData} = store;
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
  console.log('loading', store.loading);
  const isLoading = store.loading;
  const eventsMock: Partial<TEvents['events']> = [
    {
      thumbnail: {
        categoryId: 1,
        content: thumb,
        compression: 'jpg',
        eventCode: '2',
        eventTimestamp: '2020-07-06 23:37:15',
        id: 23,
        imageId: 32,
      },
      eventCode: '45',
      eventTimestamp: '2020-07-06 23:37:15',
      locationId: 1,
      sensorId: 1,
      statusId: 1,
      tocId: 1,
      trackCode: '23232',
    },
  ];

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
            event && (
              <Event key={event.eventCode}>
                <div css={{ width: 82, height: 52 }}>
                  <img
                    src={`data:image/gif;base64, ${event?.thumbnail.content}`}
                    css={{ maxWidth: '100%', height: 'auto', borderRadius: 4 }}
                    alt="Event thumbnail"
                  />
                </div>
                <EventDescription {...event} />
                <EventDetection timeStamp={event.eventTimestamp} />
                <EventStatus statusId={event.statusId} />
              </Event>
            )
          );
        })}
    </List>
  );
}

export const EventsList = observer(EventsListContainer);
