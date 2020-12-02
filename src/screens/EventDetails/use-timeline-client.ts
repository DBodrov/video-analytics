import React from 'react';
import {useFetch, TIMEZONE_OFFSET} from '@/utils';
import {useAuth, useCompany, useRefs} from '@/context';
import {EventsGetResponse200Events, EventsGetResponse200FromJSON} from '@/backend/main';
import {TEventView, TEventsByHours} from './types';
import {TEvents} from '@/context/Events';

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
  let view: Record<string, TEventView[]> = {};
  let i = 0;
  while (i <= 23) {
    view[String(i)] = [];
    i++;
  }
  return view;
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
  const {getLocationById, getSensorById} = useCompany();
  const {getCheckById, getCheckCategoryById, getEventStatusById} = useRefs();
  //FIXME: Double
  const groupEventsByHours = React.useCallback(
    (eventsList: TEvents) => {
      const view = createEmptyView();
      return eventsList?.reduce((acc, current, i) => {
        const hour = new Date(current.eventTimestamp).getHours();
        const {
          eventId,
          eventCode,
          thumbnail,
          incident,
          locationId,
          checkId,
          status,
          sensorId,
          eventTimestamp,
        } = current;
        const checkData = getCheckById(checkId);
        const eventView: TEventView = {
          id: eventId,
          thumbnail: `data:image/${thumbnail?.compression};base64, ${thumbnail?.content}`,
          eventCode,
          isIncident: incident ?? false,
          locationName: getLocationById(locationId)?.name ?? '',
          check: checkData?.name,
          checkCategory: checkData ? getCheckCategoryById(checkData?.categoryId)?.name : undefined,
          eventStatus: getEventStatusById(status?.currentId)?.name,
          sensorName: getSensorById(sensorId)?.ref?.name ?? '',
          timestamp: eventTimestamp,
        };
        acc[hour] = [...acc[hour], {...eventView}];
        return acc;
      }, view);
    },
    [getCheckById, getCheckCategoryById, getEventStatusById, getLocationById, getSensorById],
  );

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
            eventsCount: allEventsByHours && sumEventsByHours(allEventsByHours, e => Boolean(!e.isIncident)),
            incidentsCount:
              allEventsByHours && sumEventsByHours(allEventsByHours, e => Boolean(e.isIncident)),
          });
          return response;
        },
        error => {
          dispatch({status: 'rejected', error});
          return error;
        },
      );
    },
    [accessToken, companyId, fetchClient, groupEventsByHours],
  );

  const getFirstEvent = React.useCallback(
    (isIncident: boolean = false) => {
      let eventsList: (EventsGetResponse200Events | undefined)[] = [];
      if (timeline && isIncident) {
        eventsList = timeline.filter(e => e?.incident);
      } else if (timeline && !isIncident) {
        eventsList = timeline.filter(e => !e?.incident);
      }
      return eventsList[0]?.eventCode;
    },
    [timeline],
  );

  const getLastEvent = React.useCallback(
    (isIncident: boolean = false) => {
      let eventsList: (EventsGetResponse200Events | undefined)[] = [];
      if (timeline && isIncident) {
        eventsList = timeline.filter(e => e?.incident);
      } else if (timeline && !isIncident) {
        eventsList = timeline.filter(e => !e?.incident);
      }
      return eventsList[eventsList.length - 1]?.eventCode;
    },
    [timeline],
  );

  const getPrevEventCode = React.useCallback(
    (id: string, isIncident = false) => {
      let eventsList: (EventsGetResponse200Events | undefined)[] = [];
      if (timeline && isIncident) {
        eventsList = timeline.filter(e => e?.incident);
      } else if (timeline && !isIncident) {
        eventsList = timeline.filter(e => !e?.incident);
      }
      const currentIndex = eventsList.findIndex(e => e?.eventCode === id);
      return currentIndex > 0 ? eventsList[currentIndex - 1]?.eventCode : eventsList[0]?.eventCode;
    },
    [timeline],
  );

  const getNextEventCode = React.useCallback(
    (id: string, isIncident: boolean = false) => {
      let eventsList: (EventsGetResponse200Events | undefined)[] = [];
      if (timeline && isIncident) {
        eventsList = timeline.filter(e => e?.incident);
      } else if (timeline && !isIncident) {
        eventsList = timeline.filter(e => !e?.incident);
      }
      const currentIndex = eventsList.findIndex(e => e?.eventCode === id);
      return currentIndex < eventsList.length - 1
        ? eventsList[currentIndex + 1]?.eventCode
        : eventsList[eventsList.length - 1]?.eventCode;
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
    timeline,
    eventsCount,
    incidentsCount,
    getFirstEvent,
    getLastEvent,
    getPrevEventCode,
    getNextEventCode,
  };
}
