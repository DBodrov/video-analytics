import {EventGetResponse200, EventsGetResponse200ImageTrackBox} from '@/backend/main';

export type TEvent = EventGetResponse200['event'];
export type TImageTrackBox = EventsGetResponse200ImageTrackBox | undefined;
export type TDetectInfo = {
  sensor: string | undefined;
  check: string | undefined;
  checkCategory: string | undefined;
  location: string | undefined;
  object: string | undefined;
  startDetect: string | undefined;
  endDetect: string | undefined;
  eventStatus: string | undefined;
};
