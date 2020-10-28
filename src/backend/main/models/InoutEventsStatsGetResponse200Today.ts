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
 * Метрики
 * @export
 * @interface InoutEventsStatsGetResponse200Today
 */
export interface InoutEventsStatsGetResponse200Today {
    /**
     * Количество въехавших транспортных средств
     * @type {number}
     * @memberof InoutEventsStatsGetResponse200Today
     */
    inCount: number;
    /**
     * Количество выехавших транспортных средств
     * @type {number}
     * @memberof InoutEventsStatsGetResponse200Today
     */
    outCount: number;
    /**
     * Количество транспортных средств с полным кузовом
     * @type {number}
     * @memberof InoutEventsStatsGetResponse200Today
     */
    filledCount: number;
    /**
     * Количество транспортных средств с пустым кузовом
     * @type {number}
     * @memberof InoutEventsStatsGetResponse200Today
     */
    unfilledCount: number;
    /**
     * Отчетная дата
     * @type {string}
     * @memberof InoutEventsStatsGetResponse200Today
     */
    date: string;
}

export function InoutEventsStatsGetResponse200TodayFromJSON(json: any): InoutEventsStatsGetResponse200Today {
    return InoutEventsStatsGetResponse200TodayFromJSONTyped(json, false);
}

export function InoutEventsStatsGetResponse200TodayFromJSONTyped(json: any, ignoreDiscriminator: boolean): InoutEventsStatsGetResponse200Today {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'inCount': json['in_count'],
        'outCount': json['out_count'],
        'filledCount': json['filled_count'],
        'unfilledCount': json['unfilled_count'],
        'date': json['date'],
    };
}

export function InoutEventsStatsGetResponse200TodayToJSON(value?: InoutEventsStatsGetResponse200Today | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'in_count': value.inCount,
        'out_count': value.outCount,
        'filled_count': value.filledCount,
        'unfilled_count': value.unfilledCount,
        'date': value.date,
    };
}


