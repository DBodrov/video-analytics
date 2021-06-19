/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.19.dev163
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Временной диапазон возвращаемых событий
 * @export
 * @interface MoreEventsGetResponse200Period
 */
export interface MoreEventsGetResponse200Period {
    /**
     * Левая граница диапазона в формате "YYYY-MM-DD HH:MI:SS"
     * @type {string}
     * @memberof MoreEventsGetResponse200Period
     */
    startTime: string;
    /**
     * Правая граница диапазона в формате "YYYY-MM-DD HH:MI:SS"
     * @type {string}
     * @memberof MoreEventsGetResponse200Period
     */
    endTime: string;
    /**
     * Смещение часового пояса в часах
     * @type {number}
     * @memberof MoreEventsGetResponse200Period
     */
    tzOffset: number;
}

export function MoreEventsGetResponse200PeriodFromJSON(json: any): MoreEventsGetResponse200Period {
    return MoreEventsGetResponse200PeriodFromJSONTyped(json, false);
}

export function MoreEventsGetResponse200PeriodFromJSONTyped(json: any, ignoreDiscriminator: boolean): MoreEventsGetResponse200Period {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'startTime': json['start_time'],
        'endTime': json['end_time'],
        'tzOffset': json['tz_offset'],
    };
}

export function MoreEventsGetResponse200PeriodToJSON(value?: MoreEventsGetResponse200Period | null): any {
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

