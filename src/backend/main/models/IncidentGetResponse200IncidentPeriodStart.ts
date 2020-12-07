/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.19.dev153
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * null
 * @export
 * @interface IncidentGetResponse200IncidentPeriodStart
 */
export interface IncidentGetResponse200IncidentPeriodStart {
    /**
     * Идентификатор первого события в инциденте
     * @type {number}
     * @memberof IncidentGetResponse200IncidentPeriodStart
     */
    eventId: number;
    /**
     * Дата и время первого события в инциденте
     * @type {string}
     * @memberof IncidentGetResponse200IncidentPeriodStart
     */
    time: string;
}

export function IncidentGetResponse200IncidentPeriodStartFromJSON(json: any): IncidentGetResponse200IncidentPeriodStart {
    return IncidentGetResponse200IncidentPeriodStartFromJSONTyped(json, false);
}

export function IncidentGetResponse200IncidentPeriodStartFromJSONTyped(json: any, ignoreDiscriminator: boolean): IncidentGetResponse200IncidentPeriodStart {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'eventId': json['event_id'],
        'time': json['time'],
    };
}

export function IncidentGetResponse200IncidentPeriodStartToJSON(value?: IncidentGetResponse200IncidentPeriodStart | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'event_id': value.eventId,
        'time': value.time,
    };
}

