/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.18.dev138
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
 * @interface PipelineGetResponse200Incidents
 */
export interface PipelineGetResponse200Incidents {
    /**
     * Идентификатор инцидента
     * @type {number}
     * @memberof PipelineGetResponse200Incidents
     */
    id: number;
    /**
     * Параметры инцидента
     * @type {object}
     * @memberof PipelineGetResponse200Incidents
     */
    parameters: object;
}

export function PipelineGetResponse200IncidentsFromJSON(json: any): PipelineGetResponse200Incidents {
    return PipelineGetResponse200IncidentsFromJSONTyped(json, false);
}

export function PipelineGetResponse200IncidentsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PipelineGetResponse200Incidents {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'parameters': json['parameters'],
    };
}

export function PipelineGetResponse200IncidentsToJSON(value?: PipelineGetResponse200Incidents | null): any {
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


