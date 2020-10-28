import {EventGetResponse200Event, EventsGetResponse200ImageTrackBox} from '@/backend/main';
import {TEventView} from '@/context/Events';

export type TEvent = EventGetResponse200Event;
export type TImageTrackBox = EventsGetResponse200ImageTrackBox;

export type TCommonDetectInfo = {
  sensor: string;
  check: string;
  checkCategory?: string;
  location: string;
  eventStatus?: string;
};

export type TExtraDetectInfo = {
  name: string;
  value: string;
  id: number;
}

export type TEventType = 'events' | 'incidents';

//export type TEventView = {thumbnail: string; eventCode: string; isIncident: boolean};
export type TEventsByHours = Record<number, TEventView[]>;
export {TEventView};
