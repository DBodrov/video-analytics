import React from 'react';
import {useLocation, useHistory} from 'react-router-dom';

import {DetailsLayout} from '@/screens/Layouts';
import {useEventClient} from './use-event-client';
import {useTimelineClient} from './use-timeline-client';
import {EventSection} from './EventSection';
import {Timeline} from './Timeline';
import {Player} from './Player';
import {EventSidebar} from './EventSidebar';
import {EventContent} from './styles';
// import {TEvent, TIncident} from './types';

export function EventDetails() {
  const {
    state: {eventId, viewType},
  } = useLocation<{eventId: string; viewType: 'events' | 'incidents'}>();
  const history = useHistory();

  const {
    isIdle,
    isLoading,
    isError,
    eventData,
    imageContent,
    boxRects,
    commonDetectInfo,
    extraDetectInfo,
    error,
  } = useEventClient(eventId, viewType);

  const {
    eventsByHours,
    incidentsByHours,
    eventsCount,
    incidentsCount,
    queryTimeline,
    events,
    incidents,
  } = useTimelineClient();

  //const [isIncident, setIsIncident] = React.useState(viewType === 'incidents');
  const hasOccurrenceByHour = viewType === 'events' ? Boolean(eventsByHours) : Boolean(incidentsByHours);

  React.useEffect(() => {
    if (eventData) {
      queryTimeline(eventData.date);
    }
  }, [eventData, queryTimeline]);

  /**Список для боковой панели */
  const getEventsInCurrentHour = React.useCallback(() => {
    if (hasOccurrenceByHour && eventData) {
      const eventHour = new Date(eventData.date!).getHours();
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
  }, [eventData, eventsByHours, hasOccurrenceByHour, incidentsByHours, viewType]);

  const handleFirstEvent = React.useCallback(() => {
    if (hasOccurrenceByHour) {
      const id = viewType === 'events' ? events![0].code : incidents![0].id;
      if (id) {
        history.push({pathname: '/events/details', state: {eventId: String(id), viewType}});
      }
    }
  }, [events, hasOccurrenceByHour, history, incidents, viewType]);

  const handleLastEvent = React.useCallback(() => {
    if (hasOccurrenceByHour) {
      const id =
        viewType === 'events' ? events![events!.length - 1].code : incidents![incidents!.length - 1].id;
      if (id) {
        history.push({pathname: '/events/details', state: {eventId: String(id), viewType}});
      }
    }
  }, [events, hasOccurrenceByHour, history, incidents, viewType]);

  const handlePrevEvent = React.useCallback(() => {
    if (events && incidents && eventData) {
      const currentEventCodeIndex = events.findIndex(e => e.code === eventData?.id);

      const currentIncidentIdIndex = incidents?.findIndex(i => i.id === eventData?.id);
      const prevId =
        viewType === 'events'
          ? events[currentEventCodeIndex - 1].code
          : incidents[currentIncidentIdIndex - 1].id.toString();
      if (prevId) {
        history.push({pathname: '/events/details', state: {eventId: String(prevId), viewType}});
      }
    }
  }, [eventData, events, history, incidents, viewType]);

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
        history.push({pathname: '/events/details', state: {eventId: String(nextId), viewType}});
      }
    }
  }, [eventData, events, history, incidents, viewType]);

  //const changeOccurrenceType = (isIncidentView: boolean) => setIsIncident(isIncidentView);

  const renderEventSection = () => {
    if (isIdle || isLoading) {
      return <span css={{display: 'flex', height: 500, width: 800, margin: 'auto'}}>Загрузка...</span>;
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
            incidents={incidentsByHours}
            events={eventsByHours}
            eventsCount={eventsCount}
            incidentsCount={incidentsCount}
            // onFilter={changeOccurrenceType}
            viewType={viewType}
            currentDate={eventData?.date}
          />
        </div>
        <EventSidebar eventsList={getEventsInCurrentHour()} viewType={viewType} />
      </EventContent>
    </DetailsLayout>
  );
}
