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
 * Описание детектора
 * @export
 * @interface PipelineGetResponse200Detector
 */
export interface PipelineGetResponse200Detector {
    /**
     * Идентификатор детектора
     * @type {number}
     * @memberof PipelineGetResponse200Detector
     */
    id: number;
    /**
     * Параметры детектора
     * @type {object}
     * @memberof PipelineGetResponse200Detector
     */
    parameters: object;
}

export function PipelineGetResponse200DetectorFromJSON(json: any): PipelineGetResponse200Detector {
    return PipelineGetResponse200DetectorFromJSONTyped(json, false);
}

export function PipelineGetResponse200DetectorFromJSONTyped(json: any, ignoreDiscriminator: boolean): PipelineGetResponse200Detector {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'parameters': json['parameters'],
    };
}

export function PipelineGetResponse200DetectorToJSON(value?: PipelineGetResponse200Detector | null): any {
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

