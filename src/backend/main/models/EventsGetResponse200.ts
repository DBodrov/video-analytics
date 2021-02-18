/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.19.dev162
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    EventsGetResponse200Events,
    EventsGetResponse200EventsFromJSON,
    EventsGetResponse200EventsFromJSONTyped,
    EventsGetResponse200EventsToJSON,
    EventsGetResponse200Pagination,
    EventsGetResponse200PaginationFromJSON,
    EventsGetResponse200PaginationFromJSONTyped,
    EventsGetResponse200PaginationToJSON,
    MoreEventsGetResponse200Period,
    MoreEventsGetResponse200PeriodFromJSON,
    MoreEventsGetResponse200PeriodFromJSONTyped,
    MoreEventsGetResponse200PeriodToJSON,
} from './';

/**
 * 
 * @export
 * @interface EventsGetResponse200
 */
export interface EventsGetResponse200 {
    /**
     * 
     * @type {MoreEventsGetResponse200Period}
     * @memberof EventsGetResponse200
     */
    period: MoreEventsGetResponse200Period;
    /**
     * 
     * @type {EventsGetResponse200Pagination}
     * @memberof EventsGetResponse200
     */
    pagination: EventsGetResponse200Pagination;
    /**
     * Перечень событий
     * @type {Array<EventsGetResponse200Events>}
     * @memberof EventsGetResponse200
     */
    events: Array<EventsGetResponse200Events>;
}

export function EventsGetResponse200FromJSON(json: any): EventsGetResponse200 {
    return EventsGetResponse200FromJSONTyped(json, false);
}

export function EventsGetResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): EventsGetResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'period': MoreEventsGetResponse200PeriodFromJSON(json['period']),
        'pagination': EventsGetResponse200PaginationFromJSON(json['pagination']),
        'events': ((json['events'] as Array<any>).map(EventsGetResponse200EventsFromJSON)),
    };
}

export function EventsGetResponse200ToJSON(value?: EventsGetResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'period': MoreEventsGetResponse200PeriodToJSON(value.period),
        'pagination': EventsGetResponse200PaginationToJSON(value.pagination),
        'events': ((value.events as Array<any>).map(EventsGetResponse200EventsToJSON)),
    };
}


