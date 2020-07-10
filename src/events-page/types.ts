import {EventsGetResponse200, EventsGetResponse200Events} from '@/backend/main/models';
import {CheckCategoriesGetResponse200, ChecksGetResponse200, EventStatusesGetResponse200, EventStatusesGetResponse200EventStatuses} from '@/backend/auth/models';


export type TEvents = EventsGetResponse200;
export type TEvent = EventsGetResponse200Events;
export type TEventsStatus = EventStatusesGetResponse200EventStatuses;

export type TEventsStatusesList = EventStatusesGetResponse200['eventStatuses'];

export type Checks = {checks: ChecksGetResponse200[]}
export type TCheckList = Checks['checks'];

export type Categories = {categories: CheckCategoriesGetResponse200[]}
export type TCheckCategories = Categories['categories'];
