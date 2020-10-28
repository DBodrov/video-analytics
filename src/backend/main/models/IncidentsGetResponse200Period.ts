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
 * Временной диапазон возвращаемых инцидентов
 * @export
 * @interface IncidentsGetResponse200Period
 */
export interface IncidentsGetResponse200Period {
    /**
     * Левая граница диапазона в формате "YYYY-MM-DD HH:MI:SS"
     * @type {string}
     * @memberof IncidentsGetResponse200Period
     */
    startTime: string;
    /**
     * Правая граница диапазона в формате "YYYY-MM-DD HH:MI:SS"
     * @type {string}
     * @memberof IncidentsGetResponse200Period
     */
    endTime: string;
    /**
     * Смещение часового пояса в часах
     * @type {number}
     * @memberof IncidentsGetResponse200Period
     */
    tzOffset: number;
}

export function IncidentsGetResponse200PeriodFromJSON(json: any): IncidentsGetResponse200Period {
    return IncidentsGetResponse200PeriodFromJSONTyped(json, false);
}

export function IncidentsGetResponse200PeriodFromJSONTyped(json: any, ignoreDiscriminator: boolean): IncidentsGetResponse200Period {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'startTime': json['start_time'],
        'endTime': json['end_time'],
        'tzOffset': json['tz_offset'],
    };
}

export function IncidentsGetResponse200PeriodToJSON(value?: IncidentsGetResponse200Period | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'start_time': value.startTime,
        'end_time': value.endTime,
        'tz_offset': value.tzOffset,
    };
}


