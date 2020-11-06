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
    EventGetResponse200EventTrackedObject,
    EventGetResponse200EventTrackedObjectFromJSON,
    EventGetResponse200EventTrackedObjectFromJSONTyped,
    EventGetResponse200EventTrackedObjectToJSON,
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
} from './';

/**
 * Сведения о событии
 * @export
 * @interface EventGetResponse200Event
 */
export interface EventGetResponse200Event {
    /**
     * Идентификатор проверки
     * @type {number}
     * @memberof EventGetResponse200Event
     */
    checkId: number;
    /**
     * Код события
     * @type {string}
     * @memberof EventGetResponse200Event
     */
    eventCode: string;
    /**
     * Идентификатор события
     * @type {number}
     * @memberof EventGetResponse200Event
     */
    eventId: number;
    /**
     * Дата и время совершения события в формате "YYYY-MM-DD HH:MI:SS"
     * @type {string}
     * @memberof EventGetResponse200Event
     */
    eventTimestamp: string;
    /**
     * Является ли событие инцидентом ?
     * @type {boolean}
     * @memberof EventGetResponse200Event
     */
    incident: boolean;
    /**
     * Идентификатор площадки
     * @type {number}
     * @memberof EventGetResponse200Event
     */
    locationId: number;
    /**
     * Идентификатор датчика
     * @type {number}
     * @memberof EventGetResponse200Event
     */
    sensorId: number;
    /**
     * 
     * @type {EventsGetResponse200Status}
     * @memberof EventGetResponse200Event
     */
    status?: EventsGetResponse200Status;
    /**
     * Идентификатор категории обнаруженного объекта
     * @type {number}
     * @memberof EventGetResponse200Event
     */
    tocId: number;
    /**
     * 
     * @type {EventGetResponse200EventTrackedObject}
     * @memberof EventGetResponse200Event
     */
    trackedObject: EventGetResponse200EventTrackedObject;
    /**
     * 
     * @type {EventsGetResponse200Image}
     * @memberof EventGetResponse200Event
     */
    image?: EventsGetResponse200Image;
    /**
     * 
     * @type {EventsGetResponse200Thumbnail}
     * @memberof EventGetResponse200Event
     */
    thumbnail?: EventsGetResponse200Thumbnail;
}

export function EventGetResponse200EventFromJSON(json: any): EventGetResponse200Event {
    return EventGetResponse200EventFromJSONTyped(json, false);
}

export function EventGetResponse200EventFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventGetResponse200Event {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'checkId': json['check_id'],
        'eventCode': json['event_code'],
        'eventId': json['event_id'],
        'eventTimestamp': json['event_timestamp'],
        'incident': json['incident'],
        'locationId': json['location_id'],
        'sensorId': json['sensor_id'],
        'status': !exists(json, 'status') ? undefined : EventsGetResponse200StatusFromJSON(json['status']),
        'tocId': json['toc_id'],
        'trackedObject': EventGetResponse200EventTrackedObjectFromJSON(json['tracked_object']),
        'image': !exists(json, 'image') ? undefined : EventsGetResponse200ImageFromJSON(json['image']),
        'thumbnail': !exists(json, 'thumbnail') ? undefined : EventsGetResponse200ThumbnailFromJSON(json['thumbnail']),
    };
}

export function EventGetResponse200EventToJSON(value?: EventGetResponse200Event | null): any {
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
        'tracked_object': EventGetResponse200EventTrackedObjectToJSON(value.trackedObject),
        'image': EventsGetResponse200ImageToJSON(value.image),
        'thumbnail': EventsGetResponse200ThumbnailToJSON(value.thumbnail),
    };
}


