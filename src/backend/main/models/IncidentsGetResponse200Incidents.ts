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
    EventsGetResponse200Status,
    EventsGetResponse200StatusFromJSON,
    EventsGetResponse200StatusFromJSONTyped,
    EventsGetResponse200StatusToJSON,
    EventsGetResponse200TrackedObject,
    EventsGetResponse200TrackedObjectFromJSON,
    EventsGetResponse200TrackedObjectFromJSONTyped,
    EventsGetResponse200TrackedObjectToJSON,
    IncidentsGetResponse200Period1,
    IncidentsGetResponse200Period1FromJSON,
    IncidentsGetResponse200Period1FromJSONTyped,
    IncidentsGetResponse200Period1ToJSON,
} from './';

/**
 * Сведения об инциденте
 * @export
 * @interface IncidentsGetResponse200Incidents
 */
export interface IncidentsGetResponse200Incidents {
    /**
     * Идентификатор категории инцидента
     * @type {number}
     * @memberof IncidentsGetResponse200Incidents
     */
    categoryId: number;
    /**
     * Идентификатор инцидента
     * @type {number}
     * @memberof IncidentsGetResponse200Incidents
     */
    id: number;
    /**
     * Идентификатор площадки
     * @type {number}
     * @memberof IncidentsGetResponse200Incidents
     */
    locationId: number;
    /**
     * 
     * @type {IncidentsGetResponse200Period1}
     * @memberof IncidentsGetResponse200Incidents
     */
    period: IncidentsGetResponse200Period1;
    /**
     * Идентификатор датчика
     * @type {number}
     * @memberof IncidentsGetResponse200Incidents
     */
    sensorId: number;
    /**
     * 
     * @type {EventsGetResponse200Status}
     * @memberof IncidentsGetResponse200Incidents
     */
    status: EventsGetResponse200Status;
    /**
     * Идентификатор категории обнаруженного объекта
     * @type {number}
     * @memberof IncidentsGetResponse200Incidents
     */
    tocId: number;
    /**
     * 
     * @type {EventsGetResponse200TrackedObject}
     * @memberof IncidentsGetResponse200Incidents
     */
    trackedObject: EventsGetResponse200TrackedObject;
}

export function IncidentsGetResponse200IncidentsFromJSON(json: any): IncidentsGetResponse200Incidents {
    return IncidentsGetResponse200IncidentsFromJSONTyped(json, false);
}

export function IncidentsGetResponse200IncidentsFromJSONTyped(json: any, ignoreDiscriminator: boolean): IncidentsGetResponse200Incidents {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'categoryId': json['category_id'],
        'id': json['id'],
        'locationId': json['location_id'],
        'period': IncidentsGetResponse200Period1FromJSON(json['period']),
        'sensorId': json['sensor_id'],
        'status': EventsGetResponse200StatusFromJSON(json['status']),
        'tocId': json['toc_id'],
        'trackedObject': EventsGetResponse200TrackedObjectFromJSON(json['tracked_object']),
    };
}

export function IncidentsGetResponse200IncidentsToJSON(value?: IncidentsGetResponse200Incidents | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'category_id': value.categoryId,
        'id': value.id,
        'location_id': value.locationId,
        'period': IncidentsGetResponse200Period1ToJSON(value.period),
        'sensor_id': value.sensorId,
        'status': EventsGetResponse200StatusToJSON(value.status),
        'toc_id': value.tocId,
        'tracked_object': EventsGetResponse200TrackedObjectToJSON(value.trackedObject),
    };
}


