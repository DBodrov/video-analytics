import React from 'react';
import {useFetch, TIMEZONE_OFFSET} from '@/utils';
import {useAuth} from '@/context';
import {EventsGetResponse200Events, EventsGetResponse200FromJSON} from '@/backend/main';

type TEventView = {thumbnail: string; eventCode: string; isIncident: boolean};
export type TEventsByHours = Record<number, TEventView[]>;

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
  const [{status, error, allEventsByHours, eventsCount, incidentsCount}, dispatch] = React.useReducer(
    timelineReducer,
    initState,
  );
  const {accessToken, companyId} = useAuth();
  const fetchClient = useFetch();

  const queryTimeline = React.useCallback(() => {
    const headers = {Authorization: `Bearer ${accessToken}`};
    let startTime = new Date();
    startTime.setHours(0, 0, 0, 0);
    const isoStart = startTime.toISOString();
    let endTime = new Date();
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
        // const incidentsByHours = groupEventsByHours(incidents);
        // const eventsByHours = groupEventsByHours(events);

        // console.log(allEventsByHours);
        // const imageContent = `data:image/gif;base64, ${eventData.image?.content}`;
        // const trackBox = eventData.image?.trackBox;
        dispatch({
          status: 'resolved',
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
  }, [accessToken, companyId, fetchClient]);

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
  };
}
