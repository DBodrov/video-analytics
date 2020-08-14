import React from 'react';
import {useFetch, TIMEZONE_OFFSET} from '@/utils';
import {useAuth} from '@/context';
import {EventsGetResponse200Events, EventsGetResponse200FromJSON} from '@/backend/main';
import {TEventView, TEventsByHours} from './types';

type State = {
  status: 'idle' | 'pending' | 'resolved' | 'rejected';
  timeline?: Partial<EventsGetResponse200Events[]> | undefined;
  allEventsByHours?: TEventsByHours;
  incidentsCount?: number[];
  eventsCount?: number[];
  error?: any;
};

const timelineReducer = (state: State, changes: State): State => {
  return {
    ...state,
    ...changes,
  };
};

const initState: State = {
  status: 'idle',
  timeline: undefined,
  allEventsByHours: undefined,
  eventsCount: undefined,
  incidentsCount: undefined,
  error: undefined,
};

const createEmptyView = () => {
  let view: Record<string, any> = {};
  let i = 0;
  while (i <= 23) {
    view[String(i)] = [];
    i++;
  }
  return view;
};

const groupEventsByHours = (eventsList: EventsGetResponse200Events[]) => {
  const view = createEmptyView();
  return eventsList.reduce((acc, current, i) => {
    const hour = new Date(current.eventTimestamp).getHours();
    const {eventCode, thumbnail, incident} = current;
    const eventView = {
      thumbnail: `data:image/${thumbnail?.compression};base64, ${thumbnail?.content}`,
      eventCode,
      isIncident: incident,
    };
    acc[hour] = [...acc[hour], {...eventView}];
    return acc;
  }, view);
};

const sumEventsByHours = (events: TEventsByHours, filterFn: (e: TEventView) => boolean) => {
  const count = Object.keys(events).map(hour => {
    return events[Number(hour)].filter(filterFn)?.length;
  });
  return count;
};

export function useTimelineClient() {
  const [
    {status, error, timeline, allEventsByHours, eventsCount, incidentsCount},
    dispatch,
  ] = React.useReducer(timelineReducer, initState);
  const {accessToken, companyId} = useAuth();
  const fetchClient = useFetch();

  const queryTimeline = React.useCallback(
    (timestamp?: string) => {
      const headers = {Authorization: `Bearer ${accessToken}`};
      let startTime = timestamp ? new Date(timestamp) : new Date();
      startTime.setHours(0, 0, 0, 0);
      const isoStart = startTime.toISOString();
      let endTime = timestamp ? new Date(timestamp) : new Date();
      endTime.setHours(23, 59, 59, 999);
      const isoEnd = endTime.toISOString();

      fetchClient(
        `/api/va/companies/${companyId}/events/timeline?tz_offset=${TIMEZONE_OFFSET}&sort_by=asc&start_time=${isoStart}&end_time=${isoEnd}`,
        {
          headers,
        },
      ).then(
        response => {
          const timelineData = EventsGetResponse200FromJSON(response).events;
          const allEventsByHours = groupEventsByHours(timelineData);
          dispatch({
            status: 'resolved',
            timeline: timelineData,
            allEventsByHours,
            eventsCount: sumEventsByHours(allEventsByHours, e => !e.isIncident),
            incidentsCount: sumEventsByHours(allEventsByHours, e => e.isIncident),
          });
          return response;
        },
        error => {
          dispatch({status: 'rejected', error});
          return error;
        },
      );
    },
    [accessToken, companyId, fetchClient],
  );

  const getFirstEvent = React.useCallback(() => {
    if (timeline) {
      return timeline[0]?.eventCode;
    }
  }, [timeline]);

  const getLastEvent = React.useCallback(() => {
    if (timeline) {
      return timeline[timeline.length - 1]?.eventCode;
    }
  }, [timeline]);

  const getPrevEventCode = React.useCallback(
    (id: string) => {
      if (timeline) {
        const currentIndex = timeline.findIndex(e => e?.eventCode === id);
        return currentIndex > 0 ? timeline[currentIndex - 1]?.eventCode : timeline[0]?.eventCode;
      }
    },
    [timeline],
  );

  const getNextEventCode = React.useCallback(
    (id: string) => {
      if (timeline) {
        const currentIndex = timeline.findIndex(e => e?.eventCode === id);
        return currentIndex < timeline.length - 1
          ? timeline[currentIndex + 1]?.eventCode
          : timeline[timeline.length - 1]?.eventCode;
      }
    },
    [timeline],
  );

  return {
    isIdle: status === 'idle',
    isLoading: status === 'pending',
    isSuccess: status === 'resolved',
    isError: status === 'rejected',

    queryTimeline,
    error,
    allEventsByHours,
    eventsCount,
    incidentsCount,
    getFirstEvent,
    getLastEvent,
    getPrevEventCode,
    getNextEventCode,
  };
}
