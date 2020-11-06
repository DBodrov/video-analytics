import {
  EventGetResponse200Event,
  EventsGetResponse200ImageTrackBoxes,
  EventsGetResponse200TrackedObjectExtra,
} from '@/backend/main';
import {TEventView} from '@/context/Events';

export type TEvent = EventGetResponse200Event;
export type TImageTrackBoxes = EventsGetResponse200ImageTrackBoxes[];

export type TCommonDetectInfo = {
  sensor: string;
  check: string;
  checkCategory?: string;
  location: string;
  eventStatus?: string;
};

export type TExtraDetectInfo = EventsGetResponse200TrackedObjectExtra;

export type TEventType = 'events' | 'incidents';

//export type TEventView = {thumbnail: string; eventCode: string; isIncident: boolean};
export type TEventsByHours = Record<number, TEventView[]>;
export {TEventView};
