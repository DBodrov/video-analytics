/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.15.dev108
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Сведения о датчике
 * @export
 * @interface InoutEventsStatsGetResponse200Sensor
 */
export interface InoutEventsStatsGetResponse200Sensor {
    /**
     * Идентификатор датчика
     * @type {number}
     * @memberof InoutEventsStatsGetResponse200Sensor
     */
    id: number;
}

export function InoutEventsStatsGetResponse200SensorFromJSON(json: any): InoutEventsStatsGetResponse200Sensor {
    return InoutEventsStatsGetResponse200SensorFromJSONTyped(json, false);
}

export function InoutEventsStatsGetResponse200SensorFromJSONTyped(json: any, ignoreDiscriminator: boolean): InoutEventsStatsGetResponse200Sensor {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
    };
}

export function InoutEventsStatsGetResponse200SensorToJSON(value?: InoutEventsStatsGetResponse200Sensor | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
    };
}

