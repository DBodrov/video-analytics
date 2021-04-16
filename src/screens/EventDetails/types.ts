import {
  EventGetResponse200Event,
  TimelineGetOccurrence200,
  IncidentGetResponse200IncidentImageTrackBoxes,
  IncidentGetResponse200IncidentTrackedObjectExtra,
  IncidentGetResponse200Incident,
  IncidentGetResponse200
} from '@/backend/main';
import {IEventView} from '@/context/Events';

import {TDateRange} from '@/components';

export type TEvent = EventGetResponse200Event;
export type TIncident = IncidentGetResponse200Incident;
export type TImageTrackBoxes = IncidentGetResponse200IncidentImageTrackBoxes[];

export type TCommonDetectInfo = {
  sensor: string;
  check: string;
  checkCategory?: string;
  location: string;
  eventStatus?: string;
};

export type TExtraDetectInfo = IncidentGetResponse200IncidentTrackedObjectExtra;

export type TEventType = 'events' | 'incidents';
export type TOccurrenceType = 'events' | 'incidents';

//export type TEventView = {thumbnail: string; eventCode: string; isIncident: boolean};
export interface IOccurrenceView extends IEventView {eventId: string | number};
// export type TEventsByHours = Record<number, IEventView[]>;
export type TOccurrenceByHours = Record<number, IOccurrenceView[]>;
export type TOccurrenceData = TEvent & {id: string; date?: string} | TIncident & {date?: string};

export type ITimelinesQuery = {
  sortBy?: string;
  locationIds?: number;
  sensorIds?: number;
  tocIds?: number;
  tzOffset?: number;
  dates?: TDateRange;
  checkIds?: number[];
  changeDates: boolean;
  firstRender: boolean;
};

export type ITimelinesFiltersState = {
  locationFilter: number;
  sensorFilter: number;
  periodFilter?: TDateRange;
  incidentFilter: boolean;
};

export type ITimelineContext = {
  events?: TimelineGetOccurrence200[];
  incidents?: TimelineGetOccurrence200[];
  eventsByHours?: TOccurrenceByHours;
  incidentsByHours?: TOccurrenceByHours;
  incidentsCount?: number[];
  eventsCount?: number[];
  error?: any;
  queryTimeline: ()=> void;
  isIdle: boolean;
  isTimelineIdle: boolean;
  isSuccess: boolean;
  isError: boolean;
  setFiltersState: (filterState: ITimelinesFiltersState | ((args: ITimelinesFiltersState) => ITimelinesFiltersState)) => void
  setQueryParams: (queryParams: ITimelinesQuery | ((args: ITimelinesQuery) => ITimelinesQuery)) => void;
  queryParams: ITimelinesQuery;
  filtersState: ITimelinesFiltersState;
  refreshView: (period : TDateRange, newReq?: boolean) => void;
  isTimelineLoading: boolean;
  setIdleStatus: () => void;
  setUnableClickSidebar: () => void;
  setDisableClickSidebar: () => void;
  clickSidebar: boolean;
  loadStatus: boolean;
}