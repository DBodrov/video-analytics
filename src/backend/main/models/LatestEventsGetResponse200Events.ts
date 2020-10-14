/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.18.dev141
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    InoutEventsStatsGetResponse200Location,
    InoutEventsStatsGetResponse200LocationFromJSON,
    InoutEventsStatsGetResponse200LocationFromJSONTyped,
    InoutEventsStatsGetResponse200LocationToJSON,
    InoutEventsStatsGetResponse200Sensor,
    InoutEventsStatsGetResponse200SensorFromJSON,
    InoutEventsStatsGetResponse200SensorFromJSONTyped,
    InoutEventsStatsGetResponse200SensorToJSON,
    InoutEventsStatsGetResponse200TrackedObjectCategory,
    InoutEventsStatsGetResponse200TrackedObjectCategoryFromJSON,
    InoutEventsStatsGetResponse200TrackedObjectCategoryFromJSONTyped,
    InoutEventsStatsGetResponse200TrackedObjectCategoryToJSON,
    LatestEventsGetResponse200Event,
    LatestEventsGetResponse200EventFromJSON,
    LatestEventsGetResponse200EventFromJSONTyped,
    LatestEventsGetResponse200EventToJSON,
    LatestEventsGetResponse200Image,
    LatestEventsGetResponse200ImageFromJSON,
    LatestEventsGetResponse200ImageFromJSONTyped,
    LatestEventsGetResponse200ImageToJSON,
    LatestEventsGetResponse200TrackedObject,
    LatestEventsGetResponse200TrackedObjectFromJSON,
    LatestEventsGetResponse200TrackedObjectFromJSONTyped,
    LatestEventsGetResponse200TrackedObjectToJSON,
} from './';

/**
 * Сведения о последнем событии
 * @export
 * @interface LatestEventsGetResponse200Events
 */
export interface LatestEventsGetResponse200Events {
    /**
     * 
     * @type {InoutEventsStatsGetResponse200Location}
     * @memberof LatestEventsGetResponse200Events
     */
    location: InoutEventsStatsGetResponse200Location;
    /**
     * 
     * @type {InoutEventsStatsGetResponse200Sensor}
     * @memberof LatestEventsGetResponse200Events
     */
    sensor: InoutEventsStatsGetResponse200Sensor;
    /**
     * 
     * @type {InoutEventsStatsGetResponse200TrackedObjectCategory}
     * @memberof LatestEventsGetResponse200Events
     */
    category: InoutEventsStatsGetResponse200TrackedObjectCategory;
    /**
     * 
     * @type {LatestEventsGetResponse200Event}
     * @memberof LatestEventsGetResponse200Events
     */
    event?: LatestEventsGetResponse200Event;
    /**
     * 
     * @type {LatestEventsGetResponse200Image}
     * @memberof LatestEventsGetResponse200Events
     */
    image?: LatestEventsGetResponse200Image;
    /**
     * 
     * @type {LatestEventsGetResponse200TrackedObject}
     * @memberof LatestEventsGetResponse200Events
     */
    trackedObject?: LatestEventsGetResponse200TrackedObject;
}

export function LatestEventsGetResponse200EventsFromJSON(json: any): LatestEventsGetResponse200Events {
    return LatestEventsGetResponse200EventsFromJSONTyped(json, false);
}

export function LatestEventsGetResponse200EventsFromJSONTyped(json: any, ignoreDiscriminator: boolean): LatestEventsGetResponse200Events {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'location': InoutEventsStatsGetResponse200LocationFromJSON(json['location']),
        'sensor': InoutEventsStatsGetResponse200SensorFromJSON(json['sensor']),
        'category': InoutEventsStatsGetResponse200TrackedObjectCategoryFromJSON(json['category']),
        'event': !exists(json, 'event') ? undefined : LatestEventsGetResponse200EventFromJSON(json['event']),
        'image': !exists(json, 'image') ? undefined : LatestEventsGetResponse200ImageFromJSON(json['image']),
        'trackedObject': !exists(json, 'tracked_object') ? undefined : LatestEventsGetResponse200TrackedObjectFromJSON(json['tracked_object']),
    };
}

export function LatestEventsGetResponse200EventsToJSON(value?: LatestEventsGetResponse200Events | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'location': InoutEventsStatsGetResponse200LocationToJSON(value.location),
        'sensor': InoutEventsStatsGetResponse200SensorToJSON(value.sensor),
        'category': InoutEventsStatsGetResponse200TrackedObjectCategoryToJSON(value.category),
        'event': LatestEventsGetResponse200EventToJSON(value.event),
        'image': LatestEventsGetResponse200ImageToJSON(value.image),
        'tracked_object': LatestEventsGetResponse200TrackedObjectToJSON(value.trackedObject),
    };
}


