import React, {useContext, useMemo, createContext, useState} from 'react';
import {useTimelineClient} from './use-timeline-client';
import {ITimelineContext, ITimelinesQuery, ITimelinesFiltersState} from './types';
import {defaultPeriod, TIMEZONE_OFFSET} from '@/utils';

const TimelineContext = createContext<ITimelineContext | undefined>(undefined);

export function TimelinesProvider(props: any) {
  const {
    eventsByHours,
    incidentsByHours,
    eventsCount,
    incidentsCount,
    queryTimeline,
    events,
    incidents,
    isIdle,
    isLoading,
    isSuccess,
    isError,
    loadStatus,
    dispatch
  } = useTimelineClient();


  const [filtersState, setFiltersState] = useState<ITimelinesFiltersState>({
    locationFilter: -1,
    sensorFilter: -1,
    periodFilter: defaultPeriod(),
    incidentFilter: false,
  });

  const [queryParams, setQueryParams] = useState<ITimelinesQuery>({
    dates: defaultPeriod(),
    locationIds: -1,
    sensorIds: -1,
    tocIds: -1,
    tzOffset: TIMEZONE_OFFSET,
    checkIds: [],
  });
  


   const setIdleStatus = React.useCallback(()=>{
    dispatch({status:'idle'})
   },[dispatch])

  const refreshView = React.useCallback((period: [startDate: string, endDate: string]) => {
     
     if (defaultPeriod()[0] === queryParams?.dates![0] || defaultPeriod()[1] === queryParams?.dates![1]) {
      queryTimeline({...queryParams, dates: period});
     }
     else {
      queryTimeline(queryParams)
    }
  }, [queryTimeline, queryParams]);


  const ctxValue = useMemo<ITimelineContext>(
    () => ({
      refreshView,
      filtersState,
      setFiltersState,
      queryParams,
      setQueryParams,
      eventsByHours,
      incidentsByHours,
      eventsCount,
      incidentsCount,
      queryTimeline,
      events,
      incidents,
      isIdle,
      isTimelineIdle: isIdle,
      isTimelineLoading: isLoading,
      isSuccess,
      setIdleStatus,
      loadStatus,
      isError
    }),
    [
      loadStatus,
      refreshView,
      filtersState,
      setFiltersState,
      queryParams,
      setQueryParams,
      eventsByHours,
      incidentsByHours,
      eventsCount,
      incidentsCount,
      queryTimeline,
      setIdleStatus,
      events,
      incidents,
      isIdle,
      isLoading,
      isSuccess,
      isError
    ],
  );
  return <TimelineContext.Provider value={ctxValue} {...props} />;
}

export const useTimelines = () => {
  const ctx = useContext(TimelineContext);
  if (!ctx) {
    throw new Error('useEvents must be used within a EventsProvider');
  }
  return ctx;
};
