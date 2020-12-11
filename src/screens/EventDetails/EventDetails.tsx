import React from 'react';
import {useLocation} from 'react-router-dom';

import {DetailsLayout} from '@/screens/Layouts';
import {useEventClient} from './use-event-client';
import {useTimelineClient} from './use-timeline-client';
import {EventSection} from './EventSection';
import {Timeline} from './Timeline';
import {Player} from './Player';
import {EventSidebar} from './EventSidebar';
import {EventContent} from './styles';
import {TEvent, TIncident} from './types';

export function EventDetails() {
  const {
    state: {id, viewType},
  } = useLocation<{id: string; viewType: 'events' | 'incidents'}>();

  const {
    isIdle,
    isLoading,
    isError,
    fetchEvent,
    eventData,
    imageContent,
    boxRects,
    commonDetectInfo,
    extraDetectInfo,
    error,
  } = useEventClient();

  const {
    eventsByHours,
    incidentsByHours,
    eventsCount,
    incidentsCount,
    queryTimeline,
    events,
    incidents,
  } = useTimelineClient();

  const [isIncident, setIsIncident] = React.useState(viewType === 'incidents');
  const hasOccurrenceByHour = viewType === 'events' ? Boolean(eventsByHours) : Boolean(incidentsByHours);

  const getTimeStamp = React.useCallback(
    () =>
      viewType === 'events'
        ? (eventData as TEvent)?.eventTimestamp
        : (eventData as TIncident)?.period.start.time,
    [eventData, viewType],
  );

  React.useEffect(() => {
    setIsIncident(viewType === 'incidents');
  }, [viewType]);

  React.useEffect(() => {
    fetchEvent(id, viewType);
  }, [fetchEvent, id, viewType]);

  React.useEffect(() => {
    if (eventData) {
      const needFetchTimeline = isIncident ? Boolean(!incidentsByHours) : Boolean(!eventsByHours);
      if (needFetchTimeline) {
        const timeStamp = getTimeStamp();
        queryTimeline(timeStamp);
      }
    }
  }, [
    eventData,
    eventsByHours,
    fetchEvent,
    getTimeStamp,
    id,
    incidentsByHours,
    isIncident,
    queryTimeline,
    viewType,
  ]);

  const getEventsInCurrentHour = React.useCallback(() => {
    if (hasOccurrenceByHour && eventData) {
      const eventHour = new Date(getTimeStamp()).getHours();
      const eventId = eventData.id;
      const occurrences = viewType === 'events' ? eventsByHours : incidentsByHours;
      const occurrenceInHour =
        occurrences &&
        occurrences[eventHour].filter(o => {
          if (viewType === 'events') {
            return o.code !== eventId;
          }
          return o.id !== eventId;
        });
      return occurrenceInHour;
    }
    return [];
  }, [eventData, eventsByHours, getTimeStamp, hasOccurrenceByHour, incidentsByHours, viewType]);

  const handleFirstEvent = React.useCallback(() => {
    if (hasOccurrenceByHour) {
      const id = viewType === 'events' ? events![0].code : incidents![0].id;
      if (id) {
        fetchEvent(String(id), viewType);
      }
    }
  }, [events, fetchEvent, hasOccurrenceByHour, incidents, viewType]);

  const handleLastEvent = React.useCallback(() => {
    if (hasOccurrenceByHour) {
      const id =
        viewType === 'events' ? events![events!.length - 1].code : incidents![incidents!.length - 1].id;
      if (id) {
        fetchEvent(String(id), viewType);
      }
    }
  }, [events, fetchEvent, hasOccurrenceByHour, incidents, viewType]);

  const handlePrevEvent = React.useCallback(() => {
    if (events && incidents && eventData) {
      const currentEventCodeIndex = events.findIndex(e => e.code === eventData?.id);

      const currentIncidentIdIndex = incidents?.findIndex(i => i.id === eventData?.id);
      const prevId =
        viewType === 'events'
          ? events[currentEventCodeIndex - 1].code
          : incidents[currentIncidentIdIndex - 1].id.toString();
      if (prevId) {
        fetchEvent(prevId, viewType);
      }
    }
  }, [eventData, events, fetchEvent, incidents, viewType]);

  const handleNextEvent = React.useCallback(() => {
    if (events && incidents && eventData) {
      const currentEventCodeIndex = events.findIndex(e => e.code === eventData.id);
      const currentIncidentIdIndex = incidents?.findIndex(i => i.id === eventData.id);
      let nextId;
      if (viewType === 'events') {
        nextId =
          currentEventCodeIndex < events.length - 1
            ? events[currentEventCodeIndex + 1].code
            : events[currentEventCodeIndex].code;
      } else {
        nextId =
          currentIncidentIdIndex < incidents.length - 1
            ? incidents[currentIncidentIdIndex + 1].id
            : incidents[currentIncidentIdIndex].id;
      }

      if (nextId) {
        fetchEvent(String(nextId), viewType);
      }
    }
  }, [eventData, events, fetchEvent, incidents, viewType]);

  const changeOccurrenceType = (isIncidentView: boolean) => setIsIncident(isIncidentView);

  const renderEventSection = () => {
    if (isIdle || isLoading) {
      return (
        <span css={{display: 'flex', height: 500, width: 800, margin: 'auto'}}>
          {`Загрузка ${viewType === 'events' ? 'события' : 'инцидента'}...`}
        </span>
      );
    }
    if (isError) {
      return (
        <span css={{display: 'flex', height: 500, width: 800, margin: 'auto', color: 'var(--color-mts)'}}>
          {error.message}
        </span>
      );
    }
    return (
      <EventSection
        boxes={boxRects}
        imageContent={imageContent}
        commonDetectInfo={commonDetectInfo}
        extraDetectInfo={extraDetectInfo}
      />
    );
  };

  const renderPlayer = () => {
    return (
      <div css={{width: '100%', height: 55, backgroundColor: 'var(--color-form)'}}>
        <Player
          onStart={handleFirstEvent}
          onLast={handleLastEvent}
          onPrev={handlePrevEvent}
          onNext={handleNextEvent}
        />
      </div>
    );
  };

  return (
    <DetailsLayout>
      <EventContent>
        <div css={{width: '100%'}}>
          {renderEventSection()}
          {renderPlayer()}
          <Timeline
            allEvents={eventsByHours}
            incidents={incidentsByHours}
            events={eventsByHours}
            eventsCount={eventsCount}
            incidentsCount={incidentsCount}
            onFilter={changeOccurrenceType}
            isIncident={isIncident}
            viewType={isIncident ? 'incidents' : 'events'}
          />
        </div>
        <EventSidebar eventsList={getEventsInCurrentHour()} viewType={isIncident ? 'incidents' : 'events'} />
      </EventContent>
    </DetailsLayout>
  );
}
