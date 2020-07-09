import {EventsGetResponse200, EventsGetResponse200Events} from '@/backend/main/models';


export type TEvents = EventsGetResponse200
export type TEvent = EventsGetResponse200Events;
export type TEventsStatus = {
  id: number;
  code: string;
  name: string;
  description: string;
};
/**workaround */
export type TEventsStatusesList = TEventsStatus[];
