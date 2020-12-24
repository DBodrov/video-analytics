import React from 'react';
import {useFetch, TIMEZONE_OFFSET} from '@/utils';
import {useAuth, useCompany, useRefs} from '@/context';
import {TimelineGetResponse200FromJSON, TimelineGetOccurrence200} from '@/backend/main';
import {IOccurrenceView, TOccurrenceByHours} from './types';
// import {TEvents} from '@/context/Events';

type State = {
  status: 'idle' | 'pending' | 'resolved' | 'rejected';
  events?: TimelineGetOccurrence200[];
  incidents?: TimelineGetOccurrence200[];
  eventsByHours?: TOccurrenceByHours;
  incidentsByHours?: TOccurrenceByHours;
  incidentsCount?: number[];
  eventsCount?: number[];
  error?: any;
};

const timelineReducer = (state: State, changes: Partial<State>): State => {
  return {
    ...state,
    ...changes,
  };
};

const initState: State = {
  status: 'idle',
  //timeline: undefined,
  events: undefined,
  incidents: undefined,
  eventsByHours: undefined,
  incidentsByHours: undefined,
  eventsCount: undefined,
  incidentsCount: undefined,
  error: undefined,
};

const createEmptyView = () => {
  let view: Record<string, IOccurrenceView[]> = {};
  let i = 0;
  while (i <= 23) {
    view[String(i)] = [];
    i++;
  }
  return view;
};

const sumEventsByHours = (events: TOccurrenceByHours) => {
  const count = Object.keys(events).map(hour => events[Number(hour)].length);
  return count;
};

export function useTimelineClient() {
  const [
    {status, error, events, incidents, eventsByHours, incidentsByHours, eventsCount, incidentsCount},
    dispatch,
  ] = React.useReducer(timelineReducer, initState);
  const {authHeader, companyId} = useAuth();
  const {getLocationById, getSensorById} = useCompany();
  const {getCheckById, getCheckCategoryById} = useRefs();

  const groupEventsByHours = React.useCallback(
    (eventsOrIncidents: TimelineGetOccurrence200[]) => {
      const view = createEmptyView();
      return eventsOrIncidents?.reduce((acc, current, i) => {
        const hour = new Date(current.timestamp).getHours();
        const {id, thumbnail, locationId, checkId, sensorId, code, timestamp} = current;
        const checkData = getCheckById(checkId);
        const eventView: IOccurrenceView = {
          id,
          thumbnail: `data:image/${thumbnail?.compression};base64, ${thumbnail?.content}`,
          code,
          locationName: getLocationById(locationId)?.name ?? '',
          check: checkData?.name,
          checkCategory: checkData ? getCheckCategoryById(checkData?.categoryId)?.name : undefined,
          // eventStatus: getEventStatusById(status?.currentId)?.name,
          sensorName: getSensorById(sensorId)?.ref?.name ?? '',
          timestamp,
          eventId: code ? code : id,
        };
        acc[hour] = [...acc[hour], {...eventView}];
        return acc;
      }, view);
    },
    [getCheckById, getCheckCategoryById, getLocationById, getSensorById],
  );

  const fetchClient = useFetch();

  const queryTimeline = React.useCallback(
    (timestamp?: string) => {
      let startTime = timestamp ? new Date(timestamp) : new Date();
      startTime.setHours(0, 0, 0, 0);
      const isoStart = startTime.toISOString();
      let endTime = timestamp ? new Date(timestamp) : new Date();
      endTime.setHours(23, 59, 59, 999);
      const isoEnd = endTime.toISOString();

      fetchClient(
        `/api/va/companies/${companyId}/timeline?tz_offset=${TIMEZONE_OFFSET}&sort_by=asc&start_time=${isoStart}&end_time=${isoEnd}`,
        {
          headers: authHeader,
        },
      ).then(
        response => {
          const {events, incidents} = TimelineGetResponse200FromJSON(response);
          const eventsByHours = groupEventsByHours(events);
          const incidentsByHours = groupEventsByHours(incidents);
          dispatch({
            status: 'resolved',
            events,
            incidents,
            eventsByHours,
            incidentsByHours,
            eventsCount: sumEventsByHours(eventsByHours),
            incidentsCount: sumEventsByHours(incidentsByHours),
          });
          return response;
        },
        error => {
          dispatch({status: 'rejected', error});
          return error;
        },
      );
    },
    [authHeader, companyId, fetchClient, groupEventsByHours],
  );

  // const getFirstEvent = React.useCallback(
  //   () => {
  //     let eventsList: (EventsGetResponse200Events | undefined)[] = [];
  //     if (timeline && isIncident) {
  //       eventsList = timeline.filter(e => e?.incident);
  //     } else if (timeline && !isIncident) {
  //       eventsList = timeline.filter(e => !e?.incident);
  //     }
  //     return eventsList[0]?.eventCode;
  //   },
  //   [timeline],
  // );

  // const getLastEvent = React.useCallback(
  //   (isIncident: boolean = false) => {
  //     let eventsList: (EventsGetResponse200Events | undefined)[] = [];
  //     if (timeline && isIncident) {
  //       eventsList = timeline.filter(e => e?.incident);
  //     } else if (timeline && !isIncident) {
  //       eventsList = timeline.filter(e => !e?.incident);
  //     }
  //     return eventsList[eventsList.length - 1]?.eventCode;
  //   },
  //   [timeline],
  // );

  // const getPrevEventCode = React.useCallback(
  //   (id: string, isIncident = false) => {
  //     const currentEventCode = events && events.findIndex(e => e.code === id);
  //     const currentIncidentId = incidents && incidents.findIndex(i => i.id === Number(id));

  //     return {
  //       eventCode: currentEventCode! > 0 ? events[currentEventCode - 1].code
  //     }
  //     let eventsList: (EventsGetResponse200Events | undefined)[] = [];
  //     if (timeline && isIncident) {
  //       eventsList = timeline.filter(e => e?.incident);
  //     } else if (timeline && !isIncident) {
  //       eventsList = timeline.filter(e => !e?.incident);
  //     }
  //     const currentIndex = eventsList.findIndex(e => e?.eventCode === id);
  //     return currentIndex > 0 ? eventsList[currentIndex - 1]?.eventCode : eventsList[0]?.eventCode;
  //   },
  //   [timeline],
  // );

  // const getNextEventCode = React.useCallback(
  //   (id: string, isIncident: boolean = false) => {
  //     let eventsList: (EventsGetResponse200Events | undefined)[] = [];
  //     if (timeline && isIncident) {
  //       eventsList = timeline.filter(e => e?.incident);
  //     } else if (timeline && !isIncident) {
  //       eventsList = timeline.filter(e => !e?.incident);
  //     }
  //     const currentIndex = eventsList.findIndex(e => e?.eventCode === id);
  //     return currentIndex < eventsList.length - 1
  //       ? eventsList[currentIndex + 1]?.eventCode
  //       : eventsList[eventsList.length - 1]?.eventCode;
  //   },
  //   [timeline],
  // );

  return {
    isIdle: status === 'idle',
    isLoading: status === 'pending',
    isSuccess: status === 'resolved',
    isError: status === 'rejected',

    queryTimeline,
    error,
    eventsByHours,
    incidentsByHours,
    events,
    incidents,
    eventsCount,
    incidentsCount,
    // getFirstEvent,
    // getLastEvent,
    // getPrevEventCode,
    // getNextEventCode,
  };
}
