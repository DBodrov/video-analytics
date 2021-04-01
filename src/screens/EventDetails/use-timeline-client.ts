import React, {useEffect} from 'react';
import {useFetch, TIMEZONE_OFFSET, isEmptyString} from '@/utils';
import {useAuth, useCompany, useRefs, getAccessToken} from '@/context';
import {TimelineGetResponse200FromJSON, TimelineGetOccurrence200} from '@/backend/main';
import {IOccurrenceView, TOccurrenceByHours, ITimelinesQuery} from './types';
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
  const {companyId, logout} = useAuth();
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
    (queryParams?:ITimelinesQuery) => {
      let url = `/api/va/companies/${companyId}/timeline?tz_offset=${TIMEZONE_OFFSET}&sort_by=asc`;
        const query = encodeQueryData(queryParams);
        if (!isEmptyString(query)) {
          url += `&${query}`;
        }
      fetchClient(url, {
        headers: {Authorization: `Bearer ${getAccessToken()}`},
      }).then(
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
          if (error?.status_code === 401) logout();
          return error;
        },
      );
    },
    [companyId, fetchClient, groupEventsByHours, logout],
  );

  function encodeQueryData(data: any) {
    if (!data) return '';
    const queryParameters = createQueryToJSON(data);
    const query: string[] = [];
    for (const param in queryParameters) {
      if (param in queryParameters) {
        query.push(`${encodeURIComponent(param)}=${encodeURIComponent(queryParameters[param])}`);
      }
    }
    return query.join('&');
  }

  function createQueryToJSON(query: Record<string, any>) {
    const queryParameters: Record<string, any> = {};

    if (query.locationIds !== undefined && query.locationIds !== -1) {
      queryParameters['location_ids'] = query.locationIds;
    }

    if (query.sensorIds !== undefined && query.sensorIds !== -1) {
      queryParameters['sensor_ids'] = query.sensorIds;
    }

    if (query.tocIds !== undefined && query.tocIds !== -1) {
      queryParameters['toc_ids'] = query.tocIds;
    }

    // if (query.tzOffset !== undefined) {
    //   queryParameters['tz_offset'] = query.tzOffset;
    // }

    if (query.dates !== undefined) {
      queryParameters['start_time'] = query.dates[0];
    }

    if (query.dates !== undefined) {
      queryParameters['end_time'] = query.dates[1];
    }

    if (query.checkIds?.length > 0) {
      queryParameters['check_ids'] = query.checkIds.join(',');
    }
    return queryParameters;
  }

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
