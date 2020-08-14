import React from 'react';
import {useLocation} from 'react-router-dom';
import {DetailsLayout} from '@/screens/Layouts';
import {useEventClient} from './use-event-client';
import {useTimelineClient} from './use-timeline-client';
import {EventSection} from './EventSection';
import {Timeline} from './Timeline';
import {Player} from './Player';
import {EventContent} from './styles';

export function EventDetails() {
  const {
    state: {id},
  } = useLocation();

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

  React.useEffect(() => {
    if (!eventData) {
      fetchEvent(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (!allEventsByHours && eventData) {
      queryTimeline(eventData?.eventTimestamp);
    }
  }, [allEventsByHours, eventData, queryTimeline]);

  const handleFirstEvent = React.useCallback(() => {
    const id = getFirstEvent();
    if (id) {
      fetchEvent(id);
    }
  }, [fetchEvent, getFirstEvent]);

  const handleLastEvent = React.useCallback(() => {
    const id = getLastEvent();
    if (id) {
      fetchEvent(id);
    }
  }, [fetchEvent, getLastEvent]);

  const handlePrevEvent = React.useCallback(() => {
    if (eventData) {
      const id = getPrevEventCode(eventData?.eventCode);
      if (id) {
        fetchEvent(id);
      }
    }
  }, [eventData, fetchEvent, getPrevEventCode]);

  const handleNextEvent = React.useCallback(() => {
    if (eventData) {
      const id = getNextEventCode(eventData?.eventCode);
      if (id) {
        fetchEvent(id);
      }
    }
  }, [eventData, fetchEvent, getNextEventCode]);

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
          <Timeline allEvents={allEventsByHours} eventsCount={eventsCount} incidentsCount={incidentsCount} />
        </div>
        <div></div>
      </EventContent>
    </DetailsLayout>
  );
}
