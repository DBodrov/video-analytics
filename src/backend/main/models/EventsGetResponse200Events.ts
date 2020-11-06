/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.0.local0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    EventsGetResponse200Image,
    EventsGetResponse200ImageFromJSON,
    EventsGetResponse200ImageFromJSONTyped,
    EventsGetResponse200ImageToJSON,
    EventsGetResponse200Status,
    EventsGetResponse200StatusFromJSON,
    EventsGetResponse200StatusFromJSONTyped,
    EventsGetResponse200StatusToJSON,
    EventsGetResponse200Thumbnail,
    EventsGetResponse200ThumbnailFromJSON,
    EventsGetResponse200ThumbnailFromJSONTyped,
    EventsGetResponse200ThumbnailToJSON,
    EventsGetResponse200TrackedObject,
    EventsGetResponse200TrackedObjectFromJSON,
    EventsGetResponse200TrackedObjectFromJSONTyped,
    EventsGetResponse200TrackedObjectToJSON,
} from './';

/**
 * Сведения о событии
 * @export
 * @interface EventsGetResponse200Events
 */
export interface EventsGetResponse200Events {
    /**
     * Идентификатор проверки
     * @type {number}
     * @memberof EventsGetResponse200Events
     */
    checkId: number;
    /**
     * Код события
     * @type {string}
     * @memberof EventsGetResponse200Events
     */
    eventCode: string;
    /**
     * Идентификатор события
     * @type {number}
     * @memberof EventsGetResponse200Events
     */
    eventId: number;
    /**
     * Дата и время совершения события в формате "YYYY-MM-DD HH:MI:SS"
     * @type {string}
     * @memberof EventsGetResponse200Events
     */
    eventTimestamp: string;
    /**
     * Является ли событие инцидентом ?
     * @type {boolean}
     * @memberof EventsGetResponse200Events
     */
    incident?: boolean;
    /**
     * Идентификатор площадки
     * @type {number}
     * @memberof EventsGetResponse200Events
     */
    locationId: number;
    /**
     * Идентификатор датчика
     * @type {number}
     * @memberof EventsGetResponse200Events
     */
    sensorId: number;
    /**
     * 
     * @type {EventsGetResponse200Status}
     * @memberof EventsGetResponse200Events
     */
    status?: EventsGetResponse200Status;
    /**
     * Идентификатор категории обнаруженного объекта
     * @type {number}
     * @memberof EventsGetResponse200Events
     */
    tocId: number;
    /**
     * 
     * @type {EventsGetResponse200TrackedObject}
     * @memberof EventsGetResponse200Events
     */
    trackedObject: EventsGetResponse200TrackedObject;
    /**
     * 
     * @type {EventsGetResponse200Image}
     * @memberof EventsGetResponse200Events
     */
    image?: EventsGetResponse200Image;
    /**
     * 
     * @type {EventsGetResponse200Thumbnail}
     * @memberof EventsGetResponse200Events
     */
    thumbnail?: EventsGetResponse200Thumbnail;
}

export function EventsGetResponse200EventsFromJSON(json: any): EventsGetResponse200Events {
    return EventsGetResponse200EventsFromJSONTyped(json, false);
}

export function EventsGetResponse200EventsFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventsGetResponse200Events {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'checkId': json['check_id'],
        'eventCode': json['event_code'],
        'eventId': json['event_id'],
        'eventTimestamp': json['event_timestamp'],
        'incident': !exists(json, 'incident') ? undefined : json['incident'],
        'locationId': json['location_id'],
        'sensorId': json['sensor_id'],
        'status': !exists(json, 'status') ? undefined : EventsGetResponse200StatusFromJSON(json['status']),
        'tocId': json['toc_id'],
        'trackedObject': EventsGetResponse200TrackedObjectFromJSON(json['tracked_object']),
        'image': !exists(json, 'image') ? undefined : EventsGetResponse200ImageFromJSON(json['image']),
        'thumbnail': !exists(json, 'thumbnail') ? undefined : EventsGetResponse200ThumbnailFromJSON(json['thumbnail']),
    };
}

export function EventsGetResponse200EventsToJSON(value?: EventsGetResponse200Events | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'check_id': value.checkId,
        'event_code': value.eventCode,
        'event_id': value.eventId,
        'event_timestamp': value.eventTimestamp,
        'incident': value.incident,
        'location_id': value.locationId,
        'sensor_id': value.sensorId,
        'status': EventsGetResponse200StatusToJSON(value.status),
        'toc_id': value.tocId,
        'tracked_object': EventsGetResponse200TrackedObjectToJSON(value.trackedObject),
        'image': EventsGetResponse200ImageToJSON(value.image),
        'thumbnail': EventsGetResponse200ThumbnailToJSON(value.thumbnail),
    };
}


