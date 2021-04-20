import React, {useContext, useMemo, createContext, useState, useEffect} from 'react';
import {TIMEZONE_OFFSET, defaultPeriod} from '@/utils';
import {useEventsClient} from './use-events-client';
import {TEventsContext, TEventsQuery, TFiltersState} from './types';
import { checks } from '@/mocks/refs-mocks';

const EventsContext = createContext<TEventsContext | undefined>(undefined);

export function EventsProvider(props: any) {
  const {
    error,
    eventsView,
    object_count,
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
    page: 1, //page: undefined,
    pageSize: 20, //pageSize: undefined,
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


  const ctxValue = useMemo<TEventsContext>(
    () => ({
      eventsView,
      count_event: object_count,
      page_size: queryParams.pageSize, 
      error,
      setQueryParams,
      page: queryParams.page,
      checkIds: queryParams.checkIds,
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
      object_count,
      eventsView,
      filtersState,
      setFiltersState,
      getEventByCode,
      getEventsViewBySensorId,
      queryParams.page,
      queryParams.pageSize,
      queryParams.checkIds,
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
