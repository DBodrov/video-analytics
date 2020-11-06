/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.0.local0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Описание инцидента
 * @export
 * @interface PipelinesGetResponse200Incidents
 */
export interface PipelinesGetResponse200Incidents {
    /**
     * Идентификатор инцидента
     * @type {number}
     * @memberof PipelinesGetResponse200Incidents
     */
    id: number;
    /**
     * Параметры проверки
     * @type {object}
     * @memberof PipelinesGetResponse200Incidents
     */
    parameters: object;
}

export function PipelinesGetResponse200IncidentsFromJSON(json: any): PipelinesGetResponse200Incidents {
    return PipelinesGetResponse200IncidentsFromJSONTyped(json, false);
}

export function PipelinesGetResponse200IncidentsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PipelinesGetResponse200Incidents {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'parameters': json['parameters'],
    };
}

export function PipelinesGetResponse200IncidentsToJSON(value?: PipelinesGetResponse200Incidents | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'parameters': value.parameters,
    };
}


