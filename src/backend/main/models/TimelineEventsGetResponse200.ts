/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.15.dev108
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    TimelineEventsGetResponse200EventTypes,
    TimelineEventsGetResponse200EventTypesFromJSON,
    TimelineEventsGetResponse200EventTypesFromJSONTyped,
    TimelineEventsGetResponse200EventTypesToJSON,
    TimelineEventsGetResponse200Events,
    TimelineEventsGetResponse200EventsFromJSON,
    TimelineEventsGetResponse200EventsFromJSONTyped,
    TimelineEventsGetResponse200EventsToJSON,
    TimelineEventsGetResponse200Period,
    TimelineEventsGetResponse200PeriodFromJSON,
    TimelineEventsGetResponse200PeriodFromJSONTyped,
    TimelineEventsGetResponse200PeriodToJSON,
    TimelineEventsGetResponse200Thumbnails,
    TimelineEventsGetResponse200ThumbnailsFromJSON,
    TimelineEventsGetResponse200ThumbnailsFromJSONTyped,
    TimelineEventsGetResponse200ThumbnailsToJSON,
} from './';

/**
 * 
 * @export
 * @interface TimelineEventsGetResponse200
 */
export interface TimelineEventsGetResponse200 {
    /**
     * 
     * @type {TimelineEventsGetResponse200Period}
     * @memberof TimelineEventsGetResponse200
     */
    period: TimelineEventsGetResponse200Period;
    /**
     * Перечень категорий событий
     * @type {Array<TimelineEventsGetResponse200EventTypes>}
     * @memberof TimelineEventsGetResponse200
     */
    eventTypes: Array<TimelineEventsGetResponse200EventTypes>;
    /**
     * Перечень событий
     * @type {Array<TimelineEventsGetResponse200Events>}
     * @memberof TimelineEventsGetResponse200
     */
    events: Array<TimelineEventsGetResponse200Events>;
    /**
     * Перечень превью изображений по событиям
     * @type {Array<TimelineEventsGetResponse200Thumbnails>}
     * @memberof TimelineEventsGetResponse200
     */
    thumbnails: Array<TimelineEventsGetResponse200Thumbnails>;
    /**
     * Перечень обнаруженных транспортных средств
     * @type {Array<object>}
     * @memberof TimelineEventsGetResponse200
     */
    trackedObjects: Array<object>;
}

export function TimelineEventsGetResponse200FromJSON(json: any): TimelineEventsGetResponse200 {
    return TimelineEventsGetResponse200FromJSONTyped(json, false);
}

export function TimelineEventsGetResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): TimelineEventsGetResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'period': TimelineEventsGetResponse200PeriodFromJSON(json['period']),
        'eventTypes': ((json['event_types'] as Array<any>).map(TimelineEventsGetResponse200EventTypesFromJSON)),
        'events': ((json['events'] as Array<any>).map(TimelineEventsGetResponse200EventsFromJSON)),
        'thumbnails': ((json['thumbnails'] as Array<any>).map(TimelineEventsGetResponse200ThumbnailsFromJSON)),
        'trackedObjects': json['tracked_objects'],
    };
}

export function TimelineEventsGetResponse200ToJSON(value?: TimelineEventsGetResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'period': TimelineEventsGetResponse200PeriodToJSON(value.period),
        'event_types': ((value.eventTypes as Array<any>).map(TimelineEventsGetResponse200EventTypesToJSON)),
        'events': ((value.events as Array<any>).map(TimelineEventsGetResponse200EventsToJSON)),
        'thumbnails': ((value.thumbnails as Array<any>).map(TimelineEventsGetResponse200ThumbnailsToJSON)),
        'tracked_objects': value.trackedObjects,
    };
}

