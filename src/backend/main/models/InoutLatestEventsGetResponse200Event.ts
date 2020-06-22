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
/**
 * Описание события
 * @export
 * @interface InoutLatestEventsGetResponse200Event
 */
export interface InoutLatestEventsGetResponse200Event {
    /**
     * Идентификатор события
     * @type {string}
     * @memberof InoutLatestEventsGetResponse200Event
     */
    code: string;
    /**
     * Дата и время совершения события
     * @type {string}
     * @memberof InoutLatestEventsGetResponse200Event
     */
    timestamp: string;
}

export function InoutLatestEventsGetResponse200EventFromJSON(json: any): InoutLatestEventsGetResponse200Event {
    return InoutLatestEventsGetResponse200EventFromJSONTyped(json, false);
}

export function InoutLatestEventsGetResponse200EventFromJSONTyped(json: any, ignoreDiscriminator: boolean): InoutLatestEventsGetResponse200Event {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'timestamp': json['timestamp'],
    };
}

export function InoutLatestEventsGetResponse200EventToJSON(value?: InoutLatestEventsGetResponse200Event | null): any {
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

