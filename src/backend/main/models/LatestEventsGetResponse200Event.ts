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
/**
 * Описание события
 * @export
 * @interface LatestEventsGetResponse200Event
 */
export interface LatestEventsGetResponse200Event {
    /**
     * Идентификатор события
     * @type {string}
     * @memberof LatestEventsGetResponse200Event
     */
    code: string;
    /**
     * Дата и время совершения события
     * @type {string}
     * @memberof LatestEventsGetResponse200Event
     */
    timestamp: string;
}

export function LatestEventsGetResponse200EventFromJSON(json: any): LatestEventsGetResponse200Event {
    return LatestEventsGetResponse200EventFromJSONTyped(json, false);
}

export function LatestEventsGetResponse200EventFromJSONTyped(json: any, ignoreDiscriminator: boolean): LatestEventsGetResponse200Event {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'timestamp': json['timestamp'],
    };
}

export function LatestEventsGetResponse200EventToJSON(value?: LatestEventsGetResponse200Event | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'timestamp': value.timestamp,
    };
}


