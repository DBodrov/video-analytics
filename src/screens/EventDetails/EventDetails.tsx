import React from 'react';
import {useLocation} from 'react-router-dom';
import {useEvents} from '@/context/Events';
import {DetailsLayout} from '@/screens/Layouts';
import {useEventClient} from './use-event-client';
import {useTimelineClient} from './use-timeline-client';
import {EventSection} from './EventSection';
import {Timeline} from './Timeline';
import {Player} from './Player';
import {EventSidebar} from './EventSidebar';
import {EventContent} from './styles';

export function EventDetails() {
  const {
    state: {id},
  } = useLocation<{id: string}>();

  const {
    isIdle,
    isLoading,
    isError,
    fetchEvent,
    eventData,
    imageContent,
    boxRect,
    detectInfo,
    error,
  } = useEventClient();

  const {
    allEventsByHours,
    eventsCount,
    incidentsCount,
    queryTimeline,
    getFirstEvent,
    getLastEvent,
    getPrevEventCode,
    getNextEventCode,
  } = useTimelineClient();

  const {eventsView} = useEvents();

  const [isIncident, setIsIncident] = React.useState(false);

  React.useEffect(() => {
    fetchEvent(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  React.useEffect(() => {
    if (!allEventsByHours && eventData) {
      setIsIncident(eventData.incident);
      queryTimeline(eventData?.eventTimestamp);
    }
  }, [allEventsByHours, eventData, queryTimeline]);

  const getEventsInCurrentHour = React.useCallback(() => {
    if (allEventsByHours && eventsView && eventData) {
      const eventHour = new Date(eventData.eventTimestamp).getHours();
      const eventsInHour = allEventsByHours[eventHour].filter(e => e.eventCode !== eventData.eventCode);
      if (isIncident) {
        return eventsInHour.filter(e => e.isIncident);
      }
      return eventsInHour.filter(e => !e.isIncident);
    }
    return [];
  }, [allEventsByHours, eventData, eventsView, isIncident]);

  const handleFirstEvent = React.useCallback(() => {
    const id = getFirstEvent(isIncident);
    if (id) {
      fetchEvent(id);
    }
  }, [fetchEvent, getFirstEvent, isIncident]);

  const handleLastEvent = React.useCallback(() => {
    const id = getLastEvent(isIncident);
    if (id) {
      fetchEvent(id);
    }
  }, [fetchEvent, getLastEvent, isIncident]);

  const handlePrevEvent = React.useCallback(() => {
    if (eventData) {
      const id = getPrevEventCode(eventData?.eventCode, isIncident);
      if (id) {
        fetchEvent(id);
      }
    }
  }, [eventData, fetchEvent, getPrevEventCode, isIncident]);

  const handleNextEvent = React.useCallback(() => {
    if (eventData) {
      const id = getNextEventCode(eventData?.eventCode, isIncident);
      if (id) {
        fetchEvent(id);
      }
    }
  }, [eventData, fetchEvent, getNextEventCode, isIncident]);

  const renderEventSection = () => {
    if (isIdle || isLoading) {
      return (
        <span css={{display: 'flex', height: 500, width: 800, margin: 'auto'}}>Загрузка события...</span>
      );
    }
    if (isError) {
      return (
        <span css={{display: 'flex', height: 500, width: 800, margin: 'auto', color: 'var(--color-mts)'}}>
          {error.message}
        </span>
      );
    }
    return <EventSection boxRect={boxRect} imageContent={imageContent} detectInfo={detectInfo} />;
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
            allEvents={allEventsByHours}
            eventsCount={eventsCount}
            incidentsCount={incidentsCount}
            onFilter={setIsIncident}
            isIncident={isIncident}
          />
        </div>
        <EventSidebar eventsList={getEventsInCurrentHour()} />
      </EventContent>
    </DetailsLayout>
  );
}
