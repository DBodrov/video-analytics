/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.19.dev146
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
 * @interface IncidentsGetResponse200Period1Start
 */
export interface IncidentsGetResponse200Period1Start {
    /**
     * Идентификатор первого события в инциденте
     * @type {number}
     * @memberof IncidentsGetResponse200Period1Start
     */
    eventId: number;
    /**
     * Дата и время первого события в инциденте
     * @type {string}
     * @memberof IncidentsGetResponse200Period1Start
     */
    time: string;
}

export function IncidentsGetResponse200Period1StartFromJSON(json: any): IncidentsGetResponse200Period1Start {
    return IncidentsGetResponse200Period1StartFromJSONTyped(json, false);
}

export function IncidentsGetResponse200Period1StartFromJSONTyped(json: any, ignoreDiscriminator: boolean): IncidentsGetResponse200Period1Start {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'eventId': json['event_id'],
        'time': json['time'],
    };
}

export function IncidentsGetResponse200Period1StartToJSON(value?: IncidentsGetResponse200Period1Start | null): any {
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


