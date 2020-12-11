import {EventsGetResponse200, EventsGetResponse200Events, IncidentsGetResponse200, IncidentGetResponse200Incident} from '@/backend/main';

export type TEventsData = EventsGetResponse200;
export type TEvents = EventsGetResponse200['events'] | undefined;
export type TEvent = EventsGetResponse200Events;
export interface IEventView {
  id: number;
  locationName: string;
  sensorName: string;
  thumbnail: string;
  check?: string;
  checkCategory?: string;
  eventStatus?: string;
  code?: string;
  timestamp: string;
};

export interface IIncidentView extends IEventView {}

export type TIncidentsData = IncidentsGetResponse200;
export type TIncidents = IncidentGetResponse200Incident[];

export type TEventsContext = {
  eventsView?: IEventView[];
  view?: IEventView[] | IIncidentView[];
  refreshView: () => void;
  setQueryParams: (queryParams: TEventsQuery | ((args: TEventsQuery) => TEventsQuery)) => void;
  setFiltersState: (filterState: TFiltersState | ((args: TFiltersState) => TFiltersState)) => void;
  getEventByCode: (eventCode: string) => IEventView | undefined;
  getEventsViewBySensorId: (sensorId: number) => IEventView[] | undefined;
  filtersState: TFiltersState;
  error?: Error;
  status?: 'idle' | 'pending' | 'resolved' | 'rejected';
  viewType: 'events' | 'incidents';
};

export type TEventsQuery = {
  page?: number;
  pageSize?: number;
  sortBy?: string;
  locationIds?: number;
  sensorIds?: number;
  tocIds?: number;
  tzOffset?: number;
  startTime?: string;
  endTime?: string;
  onlyIncidents?: boolean;
  checkIds?: number[];
};

export type TFiltersState = {
  locationFilter: number;
  sensorFilter: number;
  periodFilter: number;
  incidentFilter: boolean;
};
