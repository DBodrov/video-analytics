/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.19.dev160
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    MoreEventsGetResponse200Period,
    MoreEventsGetResponse200PeriodFromJSON,
    MoreEventsGetResponse200PeriodFromJSONTyped,
    MoreEventsGetResponse200PeriodToJSON,
} from './';

/**
 * 
 * @export
 * @interface MoreEventsGetResponse200
 */
export interface MoreEventsGetResponse200 {
    /**
     * Новые события после события с данным идентификатором
     * @type {number}
     * @memberof MoreEventsGetResponse200
     */
    afterEventId: number;
    /**
     * Количество новых событий
     * @type {number}
     * @memberof MoreEventsGetResponse200
     */
    count: number;
    /**
     * 
     * @type {MoreEventsGetResponse200Period}
     * @memberof MoreEventsGetResponse200
     */
    period: MoreEventsGetResponse200Period;
}

export function MoreEventsGetResponse200FromJSON(json: any): MoreEventsGetResponse200 {
    return MoreEventsGetResponse200FromJSONTyped(json, false);
}

export function MoreEventsGetResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): MoreEventsGetResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'afterEventId': json['after_event_id'],
        'count': json['count'],
        'period': MoreEventsGetResponse200PeriodFromJSON(json['period']),
    };
}

export function MoreEventsGetResponse200ToJSON(value?: MoreEventsGetResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'after_event_id': value.afterEventId,
        'count': value.count,
        'period': MoreEventsGetResponse200PeriodToJSON(value.period),
    };
}


