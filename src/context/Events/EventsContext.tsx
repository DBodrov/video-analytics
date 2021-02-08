import React, {useContext, useMemo, createContext, useState} from 'react';
import {TIMEZONE_OFFSET, defaultPeriod} from '@/utils';
import {useEventsClient} from './use-events-client';
import {TEventsContext, TEventsQuery, TFiltersState} from './types';

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
  } = useEventsClient();

  const [queryParams, setQueryParams] = useState<TEventsQuery>({
    dates: defaultPeriod(),
    locationIds: -1,
    sensorIds: -1,
    tocIds: -1,
    tzOffset: TIMEZONE_OFFSET,
    onlyIncidents: false,
    page: undefined,
    pageSize: undefined,
    checkIds: [],
  });

  const [filtersState, setFiltersState] = useState<TFiltersState>({
    locationFilter: -1,
    sensorFilter: -1,
    periodFilter: defaultPeriod(),
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
      viewType: queryParams.onlyIncidents ? 'incidents' : 'events',
    }),
    [
      error,
      eventsView,
      filtersState,
      getEventByCode,
      getEventsViewBySensorId,
      queryParams.onlyIncidents,
      refreshView,
      status,
      view,
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
