import {EventsGetResponse200, EventsGetResponse200Events} from '@/backend/main';

export type TEventsData = EventsGetResponse200;
export type TEvents = EventsGetResponse200['events'] | undefined;
export type TEvent = EventsGetResponse200Events;
export type TEventView = {
  locationName: string | undefined;
  sensorName: string | undefined;
  thumbnail: string;
  check: string | undefined;
  checkCategory: string | undefined;
  eventStatus: string | undefined;
  eventCode: string | undefined;
  timestamp: string | undefined;
};

export type TEventsContext = {
  eventsView?: TEventView[];
  setQueryParams: (queryParams: TEventsQuery | ((args: TEventsQuery) => TEventsQuery)) => void;
  setFiltersState: (filterState: TFiltersState | ((args: TFiltersState) => TFiltersState)) => void;
  getEventByCode: (eventCode: string) => TEventView | undefined;
  filtersState: TFiltersState;
  error?: Error;
  isIdle: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
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
};

export type TFiltersState = {
  locationFilter: number;
  sensorFilter: number;
  periodFilter: number;
  incidentFilter: boolean;
};
