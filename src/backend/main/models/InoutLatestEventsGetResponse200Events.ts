/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.14.dev96
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    InoutLatestEventsGetResponse200Event,
    InoutLatestEventsGetResponse200EventFromJSON,
    InoutLatestEventsGetResponse200EventFromJSONTyped,
    InoutLatestEventsGetResponse200EventToJSON,
    InoutLatestEventsGetResponse200Image,
    InoutLatestEventsGetResponse200ImageFromJSON,
    InoutLatestEventsGetResponse200ImageFromJSONTyped,
    InoutLatestEventsGetResponse200ImageToJSON,
    InoutLatestEventsGetResponse200Location,
    InoutLatestEventsGetResponse200LocationFromJSON,
    InoutLatestEventsGetResponse200LocationFromJSONTyped,
    InoutLatestEventsGetResponse200LocationToJSON,
    InoutLatestEventsGetResponse200Sensor,
    InoutLatestEventsGetResponse200SensorFromJSON,
    InoutLatestEventsGetResponse200SensorFromJSONTyped,
    InoutLatestEventsGetResponse200SensorToJSON,
    InoutLatestEventsGetResponse200TrackedObject,
    InoutLatestEventsGetResponse200TrackedObjectFromJSON,
    InoutLatestEventsGetResponse200TrackedObjectFromJSONTyped,
    InoutLatestEventsGetResponse200TrackedObjectToJSON,
    InoutLatestEventsGetResponse200TrackedObjectCategory,
    InoutLatestEventsGetResponse200TrackedObjectCategoryFromJSON,
    InoutLatestEventsGetResponse200TrackedObjectCategoryFromJSONTyped,
    InoutLatestEventsGetResponse200TrackedObjectCategoryToJSON,
} from './';

/**
 * Сведения о последнем событии
 * @export
 * @interface InoutLatestEventsGetResponse200Events
 */
export interface InoutLatestEventsGetResponse200Events {
    /**
     * 
     * @type {InoutLatestEventsGetResponse200Location}
     * @memberof InoutLatestEventsGetResponse200Events
     */
    location: InoutLatestEventsGetResponse200Location;
    /**
     * 
     * @type {InoutLatestEventsGetResponse200Sensor}
     * @memberof InoutLatestEventsGetResponse200Events
     */
    sensor: InoutLatestEventsGetResponse200Sensor;
    /**
     * 
     * @type {InoutLatestEventsGetResponse200TrackedObjectCategory}
     * @memberof InoutLatestEventsGetResponse200Events
     */
    trackedObjectCategory: InoutLatestEventsGetResponse200TrackedObjectCategory;
    /**
     * 
     * @type {InoutLatestEventsGetResponse200Event}
     * @memberof InoutLatestEventsGetResponse200Events
     */
    event?: InoutLatestEventsGetResponse200Event;
    /**
     * 
     * @type {InoutLatestEventsGetResponse200Image}
     * @memberof InoutLatestEventsGetResponse200Events
     */
    image?: InoutLatestEventsGetResponse200Image;
    /**
     * 
     * @type {InoutLatestEventsGetResponse200TrackedObject}
     * @memberof InoutLatestEventsGetResponse200Events
     */
    trackedObject?: InoutLatestEventsGetResponse200TrackedObject;
}

export function InoutLatestEventsGetResponse200EventsFromJSON(json: any): InoutLatestEventsGetResponse200Events {
    return InoutLatestEventsGetResponse200EventsFromJSONTyped(json, false);
}

export function InoutLatestEventsGetResponse200EventsFromJSONTyped(json: any, ignoreDiscriminator: boolean): InoutLatestEventsGetResponse200Events {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'location': InoutLatestEventsGetResponse200LocationFromJSON(json['location']),
        'sensor': InoutLatestEventsGetResponse200SensorFromJSON(json['sensor']),
        'trackedObjectCategory': InoutLatestEventsGetResponse200TrackedObjectCategoryFromJSON(json['tracked_object_category']),
        'event': !exists(json, 'event') ? undefined : InoutLatestEventsGetResponse200EventFromJSON(json['event']),
        'image': !exists(json, 'image') ? undefined : InoutLatestEventsGetResponse200ImageFromJSON(json['image']),
        'trackedObject': !exists(json, 'tracked_object') ? undefined : InoutLatestEventsGetResponse200TrackedObjectFromJSON(json['tracked_object']),
    };
}

export function InoutLatestEventsGetResponse200EventsToJSON(value?: InoutLatestEventsGetResponse200Events | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'location': InoutLatestEventsGetResponse200LocationToJSON(value.location),
        'sensor': InoutLatestEventsGetResponse200SensorToJSON(value.sensor),
        'tracked_object_category': InoutLatestEventsGetResponse200TrackedObjectCategoryToJSON(value.trackedObjectCategory),
        'event': InoutLatestEventsGetResponse200EventToJSON(value.event),
        'image': InoutLatestEventsGetResponse200ImageToJSON(value.image),
        'tracked_object': InoutLatestEventsGetResponse200TrackedObjectToJSON(value.trackedObject),
    };
}


