import {useReducer, useCallback} from 'react';
import {EventsGetResponse200FromJSON} from '@/backend/main';
import {useAuth, useCompany, useRefs} from '@/context';
import {useFetch, isEmptyString} from '@/utils';
import {TEventsData, TEvents, TEventsQuery} from './types';

type TEventsState = {
  status: 'idle' | 'pending' | 'resolved' | 'rejected';
  events?: TEventsData['events'];
  pagination?: TEventsData['pagination'];
  period?: TEventsData['period'];
  error?: any;
};

const initState: TEventsState = {
  status: 'idle',
  error: undefined,
  events: undefined,
  pagination: undefined,
  period: undefined,
};

export function useEventsClient() {
  const [{status, events, error}, setEventsState] = useReducer(
    (s: TEventsState, a: TEventsState) => ({...s, ...a}),
    initState,
  );
  const fetchClient = useFetch();
  const {accessToken, companyId} = useAuth();
  const {getLocationById, getSensorById} = useCompany();
  const {getCheckById, getCheckCategoryById, getEventStatusById} = useRefs();

  const createEventsView = useCallback(
    (events: TEvents) => {
      return events?.map(event => {
        const checkData = getCheckById(event.checkId);
        return {
          eventCode: event.eventCode,
          timestamp: event.eventTimestamp,
          locationName: getLocationById(event.locationId)?.name,
          sensorName: getSensorById(event.sensorId)?.name,
          thumbnail: event.thumbnail?.content ? `data:image/gif;base64, ${event?.thumbnail.content}` : 'N/A',
          check: checkData?.name,
          checkCategory: checkData ? getCheckCategoryById(checkData?.categoryId)?.name : undefined,
          eventStatus: getEventStatusById(event?.status?.currentId)?.name,
        };
      });
    },
    [getCheckById, getCheckCategoryById, getEventStatusById, getLocationById, getSensorById],
  );

  const queryEvents = useCallback(
    (queryData: TEventsQuery) => {
      setEventsState({status: 'pending'});
      const query = encodeQueryData(queryData);
      const onlyIncidents = queryData.onlyIncidents;

      let url = `/api/va/companies/${companyId}/events`;
      if (!isEmptyString(query)) {
        url += `?sort_by=desc&${query}`;
      }

      const headers = {Authorization: `Bearer ${accessToken}`};
      const fetchEvents = fetchClient(url, {headers});
      Promise.all([fetchEvents]).then(
        response => {
          const [eventsRaw] = response;
          const {events, pagination, period} = EventsGetResponse200FromJSON(eventsRaw);
          if (onlyIncidents) {
            const incidents = events.filter(e => e.incident);
            setEventsState({status: 'resolved', events: incidents, pagination, period});
            return response;
          }
          setEventsState({status: 'resolved', events, pagination, period});
          return response;
        },
        error => {
          setEventsState({status: 'rejected', error});
          return error;
        },
      );
    },
    [accessToken, companyId, fetchClient],
  );

  const getEventByCode = useCallback(
    (eventCode: string) => {
      return createEventsView(events)?.find(event => {
        return event.eventCode === eventCode;
      });
    },
    [createEventsView, events],
  );

  return {
    queryEvents,
    events,
    error,
    eventsView: createEventsView(events),
    getEventByCode,

    isIdle: status === 'idle',
    isLoading: status === 'pending',
    isSuccess: status === 'resolved',
    isError: status === 'rejected',
  };
}

function encodeQueryData(data: any) {
  const queryParameters = createQueryToJSON(data);
  const query: string[] = [];
  for (const param in queryParameters) {
    if (param in queryParameters) {
      query.push(`${encodeURIComponent(param)}=${encodeURIComponent(queryParameters[param])}`);
    }
  }
  return query.join('&');
}

function createQueryToJSON(query: Record<string, unknown>) {
  const queryParameters: Record<string, any> = {};

  if (query.page !== undefined) {
    queryParameters['page'] = query.page;
  }

  if (query.pageSize !== undefined) {
    queryParameters['page_size'] = query.pageSize;
  }

  if (query.locationIds !== undefined && query.locationIds !== -1) {
    queryParameters['location_ids'] = query.locationIds;
  }

  if (query.sensorIds !== undefined && query.sensorIds !== -1) {
    queryParameters['sensor_ids'] = query.sensorIds;
  }

  if (query.tocIds !== undefined && query.tocIds !== -1) {
    queryParameters['toc_ids'] = query.tocIds;
  }

  if (query.tzOffset !== undefined) {
    queryParameters['tz_offset'] = query.tzOffset;
  }

  if (query.startTime !== undefined) {
    queryParameters['start_time'] = query.startTime;
  }

  if (query.endTime !== undefined) {
    queryParameters['end_time'] = query.endTime;
  }
  return queryParameters;
}
