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
    dispatch,
    clickSidebar,
    changeDateTimeline
  } = useTimelineClient();


  const [filtersState, setFiltersState] = useState<ITimelinesFiltersState>({
    locationFilter: -1,
    sensorFilter: -1,
    periodFilter: defaultPeriod(),
    incidentFilter: false,
  });

  const [queryParams, setQueryParams] = useState<ITimelinesQuery>({
    changeDates: false,
    dates: defaultPeriod(),
    firstRender : true,
    locationIds: -1,
    sensorIds: -1,
    tocIds: -1,
    tzOffset: TIMEZONE_OFFSET,
    checkIds: [],
  });
  

  const setUnableClickSidebar = React.useCallback(()=>{
    dispatch({clickSidebar:true})
  },[dispatch])


  const setDisableClickSidebar = React.useCallback(()=>{
    dispatch({clickSidebar:false})
  },[dispatch])

   const setIdleStatus = React.useCallback(()=>{
    dispatch({status:'idle'})
   },[dispatch])

  const refreshView = React.useCallback((period: [startDate: string, endDate: string]) => {
      queryTimeline({...queryParams, dates: period});
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
      isError,
      setUnableClickSidebar,
      setDisableClickSidebar,
      clickSidebar,
      changeDateTimeline
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
      isError,
      setUnableClickSidebar,
      setDisableClickSidebar,
      clickSidebar,
      changeDateTimeline
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
