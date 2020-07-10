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
/**
 * Сведения об обнаруженном транспортном средстве
 * @export
 * @interface LatestEventsGetResponse200TrackedObject
 */
export interface LatestEventsGetResponse200TrackedObject {
    /**
     * Код отслеживаемого объекта
     * @type {string}
     * @memberof LatestEventsGetResponse200TrackedObject
     */
    code: string;
    /**
     * Государственный регистрационный номер транспортного средства
     * @type {string}
     * @memberof LatestEventsGetResponse200TrackedObject
     */
    licensePlateNumber: string;
}

export function LatestEventsGetResponse200TrackedObjectFromJSON(json: any): LatestEventsGetResponse200TrackedObject {
    return LatestEventsGetResponse200TrackedObjectFromJSONTyped(json, false);
}

export function LatestEventsGetResponse200TrackedObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): LatestEventsGetResponse200TrackedObject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'licensePlateNumber': json['license_plate_number'],
    };
}

export function LatestEventsGetResponse200TrackedObjectToJSON(value?: LatestEventsGetResponse200TrackedObject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'license_plate_number': value.licensePlateNumber,
    };
}


