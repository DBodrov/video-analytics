import React, {useEffect} from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import {EventsDetailsFilters} from './EventsDetailsFilters';
import {DetailsLayout} from '@/screens/Layouts';
import {useEventClient} from './use-event-client';
import {useTimelines} from './TimelineContext';
import {EventSection} from './EventSection';
import {Timeline} from './Timeline';
import {Player} from './Player';
import {getDatePeriod} from '@/utils';
import {EventSidebar} from './EventSidebar';
import {EventContent, PlayerLayout, PanelFilterLayout} from './styles';
import {ITimelinesQuery} from './types';

export function EventDetails() {
  const {
    state: {eventId, viewType},
  } = useLocation<{eventId: string; viewType: 'events' | 'incidents'; isChangeDates?: boolean;}>();
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
    isTimelineIdle,
    isTimelineLoading,
    events,
    incidents,
    refreshView,
    setIdleStatus,
    clickSidebar,
    setUnableClickSidebar,
  } = useTimelines();

  //const [isIncident, setIsIncident] = React.useState(viewType === 'incidents');
  const hasOccurrenceByHour = viewType === 'events' ? Boolean(eventsByHours) : Boolean(incidentsByHours);

  useEffect(() => {
    if (eventData) {
      refreshView(getDatePeriod(eventData?.date));
    }
  }, [eventData, refreshView]);

  /**Список для боковой панели */
  const getEventsInCurrentHour = React.useCallback(() => {
    if (hasOccurrenceByHour && eventData) {
      const eventHour = new Date(eventData.date!).getHours();
      const occurrences = viewType === 'events' ? eventsByHours : incidentsByHours;
      const occurrenceInHour = occurrences && occurrences[eventHour];
      return occurrenceInHour;
    }
    return [];
  }, [eventData, hasOccurrenceByHour, eventsByHours, incidentsByHours, viewType]);

  const handleFirstEvent = React.useCallback(() => {
    if (hasOccurrenceByHour) {
      const id = viewType === 'events' ? events![0].code : incidents![0].id;
      if (id && id !== eventId) {
        setUnableClickSidebar();
        setIdleStatus();
        history.push({pathname: '/events/details', state: {eventId: String(id), viewType}});
      }
    }
  }, [events, hasOccurrenceByHour, history, incidents, viewType, setIdleStatus, setUnableClickSidebar, eventId]);

  const handleLastEvent = React.useCallback(() => {
    if (hasOccurrenceByHour) {
      const id =
        viewType === 'events' ? events![events!.length - 1].code : incidents![incidents!.length - 1].id;
      if (id && id !== eventId) {
        setUnableClickSidebar();
        setIdleStatus();
        history.push({pathname: '/events/details', state: {eventId: String(id), viewType}});
      }
    }
  }, [events, hasOccurrenceByHour, history, incidents, viewType, setIdleStatus, setUnableClickSidebar,eventId]);

  const handlePrevEvent = React.useCallback(() => {
    if (events && incidents && eventData) {
      const currentEventCodeIndex = events.findIndex(e => e.code === eventData?.id);

      const currentIncidentIdIndex = incidents?.findIndex(i => i.id === eventData?.id);

      if (currentEventCodeIndex < 1 && viewType === 'events') {
        return;
      }

      if (currentIncidentIdIndex < 1 && viewType === 'incidents') {
        return;
      }

      const prevId =
        viewType === 'events'
          ? events[currentEventCodeIndex - 1].code
          : incidents[currentIncidentIdIndex - 1].id.toString();
      if (prevId) {
        setUnableClickSidebar();
        setIdleStatus();
        history.push({pathname: '/events/details', state: {eventId: String(prevId), viewType}});
      }
    }
  }, [eventData, events, history, incidents, viewType, setIdleStatus, setUnableClickSidebar]);

  const handleNextEvent = React.useCallback(() => {
    if (events && incidents && eventData) {
      const currentEventCodeIndex = events.findIndex(e => e.code === eventData.id);
      const currentIncidentIdIndex = incidents?.findIndex(i => i.id === eventData.id);
      let nextId;
      if (viewType === 'events') {
        nextId = currentEventCodeIndex < events.length - 1 ? events[currentEventCodeIndex + 1].code : null;
      } else {
        nextId =
          currentIncidentIdIndex < incidents.length - 1 ? incidents[currentIncidentIdIndex + 1].id : null;
      }

      if (nextId) {
        setUnableClickSidebar();
        setIdleStatus();
        history.push({pathname: '/events/details', state: {eventId: String(nextId), viewType}});
      }
    }
  }, [eventData, events, history, incidents, viewType, setIdleStatus, setUnableClickSidebar]);

  const renderEventSection = () => {
    if (isTimelineIdle || isTimelineLoading || isLoading || isIdle) {
      return <span css={{display: 'flex', height: 500, width: 800, margin: 'auto'}}>Загрузка...</span>;
    }
    if (isError) {
      return (
        <span css={{display: 'flex', height: 500, width: 800, margin: 'auto', color: 'var(--color-mts)'}}>
          {error.message}
        </span>
      );
    }

    if (events?.length === 0) {
      return (
        <span css={{display: 'flex', height: 500, width: 800, margin: 'auto', color: 'var(--color-mts)'}}>
          Событий не найдено
        </span>
      );
    }

    return (
      <EventSection
        boxes={boxRects}
        viewType={viewType}
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

  const renderEventSidebar = () => {
    console.log(isTimelineIdle , isTimelineLoading , isLoading , isIdle)
    if ((isTimelineIdle || isTimelineLoading || isLoading || isIdle) && !clickSidebar) {
      return (
        <span
          css={{
            display: 'flex',
            paddingTop: '15px',
            backgroundColor: 'var(--color-form)',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          Загрузка...
        </span>
      );
    }
    if (isError) {
      return (
        <div
          css={{
            display: 'flex',
            paddingTop: '15px',
            flexDirection: 'column',
            backgroundColor: 'var(--color-form)',
            color: 'var(--color-mts)',
            alignItems: 'center',
          }}
        >
          {error.message}
        </div>
      );
    }
    return <EventSidebar eventsList={getEventsInCurrentHour()} viewType={viewType} eventId={eventId} />;
  };

  return (
    <DetailsLayout>
      <EventContent>
        <div css={{width: '100%'}}>
          <PlayerLayout>
            <PanelFilterLayout>
              <EventsDetailsFilters parrentDate={eventData?.date} />
            </PanelFilterLayout>
            {renderEventSection()}
            {renderPlayer()}
          </PlayerLayout>
          <Timeline
            incidents={incidentsByHours}
            events={eventsByHours}
            eventsCount={eventsCount}
            incidentsCount={incidentsCount}
            // onFilter={changeOccurrenceType}
            viewType={viewType}
            eventData={eventData}
          />
        </div>
        {renderEventSidebar()}
      </EventContent>
    </DetailsLayout>
  );
}
