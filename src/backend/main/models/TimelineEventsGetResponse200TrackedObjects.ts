/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.16.dev115
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    TimelineEventsGetAttr,
    TimelineEventsGetAttrFromJSON,
    TimelineEventsGetAttrFromJSONTyped,
    TimelineEventsGetAttrToJSON,
} from './';

/**
 * Сведения об обнаруженном транспортном средстве
 * @export
 * @interface TimelineEventsGetResponse200TrackedObjects
 */
export interface TimelineEventsGetResponse200TrackedObjects {
    /**
     * Код транспортного средства
     * @type {string}
     * @memberof TimelineEventsGetResponse200TrackedObjects
     */
    code: string;
    /**
     * 
     * @type {TimelineEventsGetAttr}
     * @memberof TimelineEventsGetResponse200TrackedObjects
     */
    driveIn?: TimelineEventsGetAttr;
    /**
     * 
     * @type {TimelineEventsGetAttr}
     * @memberof TimelineEventsGetResponse200TrackedObjects
     */
    driveOut?: TimelineEventsGetAttr;
    /**
     * 
     * @type {TimelineEventsGetAttr}
     * @memberof TimelineEventsGetResponse200TrackedObjects
     */
    licensePlateNumber?: TimelineEventsGetAttr;
    /**
     * 
     * @type {TimelineEventsGetAttr}
     * @memberof TimelineEventsGetResponse200TrackedObjects
     */
    filled?: TimelineEventsGetAttr;
    /**
     * 
     * @type {TimelineEventsGetAttr}
     * @memberof TimelineEventsGetResponse200TrackedObjects
     */
    unfilled?: TimelineEventsGetAttr;
}

export function TimelineEventsGetResponse200TrackedObjectsFromJSON(json: any): TimelineEventsGetResponse200TrackedObjects {
    return TimelineEventsGetResponse200TrackedObjectsFromJSONTyped(json, false);
}

export function TimelineEventsGetResponse200TrackedObjectsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimelineEventsGetResponse200TrackedObjects {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'driveIn': !exists(json, 'drive_in') ? undefined : TimelineEventsGetAttrFromJSON(json['drive_in']),
        'driveOut': !exists(json, 'drive_out') ? undefined : TimelineEventsGetAttrFromJSON(json['drive_out']),
        'licensePlateNumber': !exists(json, 'license_plate_number') ? undefined : TimelineEventsGetAttrFromJSON(json['license_plate_number']),
        'filled': !exists(json, 'filled') ? undefined : TimelineEventsGetAttrFromJSON(json['filled']),
        'unfilled': !exists(json, 'unfilled') ? undefined : TimelineEventsGetAttrFromJSON(json['unfilled']),
    };
}

export function TimelineEventsGetResponse200TrackedObjectsToJSON(value?: TimelineEventsGetResponse200TrackedObjects | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'drive_in': TimelineEventsGetAttrToJSON(value.driveIn),
        'drive_out': TimelineEventsGetAttrToJSON(value.driveOut),
        'license_plate_number': TimelineEventsGetAttrToJSON(value.licensePlateNumber),
        'filled': TimelineEventsGetAttrToJSON(value.filled),
        'unfilled': TimelineEventsGetAttrToJSON(value.unfilled),
    };
}


