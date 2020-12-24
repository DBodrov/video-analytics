import {
  EventGetResponse200Event,
  TimelineGetOccurrence200,
  IncidentGetResponse200IncidentImageTrackBoxes,
  IncidentGetResponse200IncidentTrackedObjectExtra,
  IncidentGetResponse200Incident,
  IncidentGetResponse200
} from '@/backend/main';
import {IEventView} from '@/context/Events';

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
