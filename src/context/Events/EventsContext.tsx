import React, {useContext, useMemo, createContext, useState} from 'react';
import {useEventsClient} from './use-events-client';
import {TEventsContext, TEventsQuery} from './types';

const EventsContext = createContext<TEventsContext | undefined>(undefined);

export function EventsProvider(props: any) {
  const {
    error,
    eventsView,
    queryEvents,
    getEventByCode,
    getEventsViewBySensorId,
    status,
    view,
    viewType,
  } = useEventsClient();

  const [queryParams, setQueryParams] = useState<TEventsQuery>({
    startTime: undefined, //'2020-07-13T00:00:00',
    endTime: undefined, // '2020-07-14T00:00:00'
    locationIds: -1,
    sensorIds: -1,
    tocIds: -1,
    tzOffset: Math.abs(new Date().getTimezoneOffset() / 60),
    onlyIncidents: false,
    page: undefined,
    pageSize: undefined,
    checkIds: [],
  });

  const [filtersState, setFiltersState] = useState({
    locationFilter: -1,
    sensorFilter: -1,
    periodFilter: -1,
    incidentFilter: false,
  });

  const refreshView = React.useCallback(() => {
    queryEvents(queryParams);
  }, [queryEvents, queryParams]);

  // useEffect(() => {
  //   queryEvents(queryParams);
  // }, [queryEvents, queryParams]);

  const ctxValue = useMemo<TEventsContext>(
    () => ({
      eventsView,
      error,
      setQueryParams,
      setFiltersState,
      filtersState,
      getEventByCode,
      getEventsViewBySensorId,
      status,
      view,
      refreshView,
      viewType,
    }),
    [
      error,
      eventsView,
      filtersState,
      getEventByCode,
      getEventsViewBySensorId,
      refreshView,
      status,
      view,
      viewType,
    ],
  );
  return <EventsContext.Provider value={ctxValue} {...props} />;
}

export const useEvents = () => {
  const ctx = useContext(EventsContext);
  if (!ctx) {
    throw new Error('useEvents must be used within a EventsProvider');
  }
  return ctx;
};
