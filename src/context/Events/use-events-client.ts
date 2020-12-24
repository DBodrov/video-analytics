import React, {useReducer, useCallback} from 'react';
import {EventsGetResponse200FromJSON, IncidentsGetResponse200FromJSON} from '@/backend/main';
import {useAuth, useCompany, useRefs} from '@/context';
import {useFetch, isEmptyString} from '@/utils';
import {TEventsData, TEvents, TEventsQuery, IEventView, TIncidents, IIncidentView} from './types';

type TEventsState = {
  status: 'idle' | 'pending' | 'resolved' | 'rejected';
  events?: TEventsData['events'];
  incidents?: TIncidents;
  pagination?: TEventsData['pagination'];
  period?: TEventsData['period'];
  error?: any;
  view?: IEventView[] | IIncidentView[];
  viewType: 'events' | 'incidents';
};

const initState: TEventsState = {
  status: 'idle',
  error: undefined,
  events: undefined,
  incidents: undefined,
  pagination: undefined,
  period: undefined,
  view: undefined,
  viewType: 'events',
};

export function useEventsClient() {
  const [{status, events, error, view, viewType}, setEventsState] = useReducer(
    (state: TEventsState, changes: Partial<TEventsState>) => ({...state, ...changes}),
    initState,
  );
  const fetchClient = useFetch();
  const {authHeader, companyId} = useAuth();
  const {getLocationById, getSensorById} = useCompany();
  const {getCheckById, getCheckCategoryById, getEventStatusById, getIncidentNameByCategoryId} = useRefs();

  const createEventsView = useCallback(
    (events: TEvents): IEventView[] | undefined => {
      if (events) {
        return events.map(event => {
          const checkData = getCheckById(event.checkId);
          return {
            id: event.eventId,
            code: event.eventCode,
            timestamp: event.eventTimestamp,
            locationName: getLocationById(event.locationId)?.name ?? '',
            sensorName: getSensorById(event.sensorId)?.ref?.name ?? '',
            thumbnail: event.thumbnail?.content
              ? `data:image/gif;base64, ${event?.thumbnail.content}`
              : 'N/A',
            check: checkData?.name,
            checkCategory: getCheckCategoryById(checkData?.categoryId)?.name,
            eventStatus: getEventStatusById(event?.status?.currentId)?.name,
            eventType: 'events'
          };
        });
      }
      return undefined;
    },
    [getCheckById, getCheckCategoryById, getEventStatusById, getLocationById, getSensorById],
  );

  const createIncidentsView = useCallback(
    (incidents: TIncidents): IIncidentView[] | undefined => {
      if (incidents) {
        return incidents.map(incident => {
          return {
            id: incident.id,
            code: String(incident.id),
            timestamp: `${incident.period.start.time} - ${(incident.period.end as any).time}`,
            locationName: getLocationById(incident.locationId)?.name ?? '',
            sensorName: getSensorById(incident.sensorId)?.ref?.name ?? '',
            thumbnail: incident.thumbnail?.content
              ? `data:image/gif;base64, ${incident?.thumbnail.content}`
              : 'N/A',
            check: getIncidentNameByCategoryId(incident.categoryId),
            checkCategory: getCheckCategoryById(incident.categoryId)?.name,
            eventStatus: getEventStatusById(incident?.status?.currentId)?.name,
            eventType: 'incidents'
          };
        });
      }
      return undefined;
    },
    [getCheckCategoryById, getEventStatusById, getIncidentNameByCategoryId, getLocationById, getSensorById],
  );

  const queryEvents = useCallback(
    (queryData: TEventsQuery) => {
      setEventsState({status: 'pending'});
      const query = encodeQueryData(queryData);
      const onlyIncidents = queryData.onlyIncidents;

      let url = onlyIncidents
        ? `/api/va/companies/${companyId}/incidents`
        : `/api/va/companies/${companyId}/events`;
      if (!isEmptyString(query)) {
        url += `?sort_by=desc&${query}`;
      }

      const headers = authHeader;
      const fetchEvents = fetchClient(url, {headers});
      Promise.all([fetchEvents]).then(
        response => {
          if (onlyIncidents) {
            const [incidentsResponse] = response;
            const {incidents /*pagination, period*/} = IncidentsGetResponse200FromJSON(incidentsResponse);
            setEventsState({
              status: 'resolved',
              incidents,
              view: createIncidentsView(incidents),
              viewType: 'incidents',
            });
            return response;
          }
          const [eventsRaw] = response;
          const {events} = EventsGetResponse200FromJSON(eventsRaw);
          setEventsState({status: 'resolved', events, view: createEventsView(events), viewType: 'events'});
          return response;
        },
        error => {
          setEventsState({status: 'rejected', error});
          return error;
        },
      );
    },
    [authHeader, companyId, createEventsView, createIncidentsView, fetchClient],
  );

  /**@deprecated */
  const getEventByCode = useCallback(
    (eventCode: string) => {
      if (events) {
        return createEventsView(events)?.find(event => {
          return event.code === eventCode;
        });
      }
    },
    [createEventsView, events],
  );

  /**@deprecated */
  const eventsView = React.useMemo(() => {
    return events ? createEventsView(events) : [];
  }, [createEventsView, events]);

  /**@deprecated */
  const getEventsViewBySensorId = React.useCallback(
    (sensorId: number) => {
      const eventsBySensor = events?.filter(event => event.sensorId === sensorId);
      return createEventsView(eventsBySensor);
    },
    [createEventsView, events],
  );

  return {
    queryEvents,
    events,
    error,
    eventsView,
    getEventByCode,
    getEventsViewBySensorId,
    view,
    viewType,

    isIdle: status === 'idle',
    isLoading: status === 'pending',
    isSuccess: status === 'resolved',
    isError: status === 'rejected',
    status,
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

function createQueryToJSON(query: Record<string, any>) {
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

  if (query.checkIds?.length > 0) {
    queryParameters['check_ids'] = query.checkIds.join(',');
  }
  return queryParameters;
}
