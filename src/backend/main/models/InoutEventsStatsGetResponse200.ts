/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.17.dev126
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    InoutEventsStatsGetResponse200Stats,
    InoutEventsStatsGetResponse200StatsFromJSON,
    InoutEventsStatsGetResponse200StatsFromJSONTyped,
    InoutEventsStatsGetResponse200StatsToJSON,
} from './';

/**
 * 
 * @export
 * @interface InoutEventsStatsGetResponse200
 */
export interface InoutEventsStatsGetResponse200 {
    /**
     * 
     * @type {Array<InoutEventsStatsGetResponse200Stats>}
     * @memberof InoutEventsStatsGetResponse200
     */
    stats: Array<InoutEventsStatsGetResponse200Stats>;
}

export function InoutEventsStatsGetResponse200FromJSON(json: any): InoutEventsStatsGetResponse200 {
    return InoutEventsStatsGetResponse200FromJSONTyped(json, false);
}

export function InoutEventsStatsGetResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): InoutEventsStatsGetResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stats': ((json['stats'] as Array<any>).map(InoutEventsStatsGetResponse200StatsFromJSON)),
    };
}

export function InoutEventsStatsGetResponse200ToJSON(value?: InoutEventsStatsGetResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'stats': ((value.stats as Array<any>).map(InoutEventsStatsGetResponse200StatsToJSON)),
    };
}


