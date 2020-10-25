import {EventGetResponse200Event, EventsGetResponse200ImageTrackBox} from '@/backend/main';
import {TEventView} from '@/context/Events';

export type TEvent = EventGetResponse200Event;
export type TImageTrackBox = EventsGetResponse200ImageTrackBox;
export type TDetectInfo = {
  sensor: string;
  check: string;
  checkCategory?: string;
  location: string;
  object: string;
  startDetect?: string;
  endDetect?: string;
  eventStatus?: string;
  direction?: string;
};

export type TEventType = 'events' | 'incidents';

//export type TEventView = {thumbnail: string; eventCode: string; isIncident: boolean};
export type TEventsByHours = Record<number, TEventView[]>;
export {TEventView};
