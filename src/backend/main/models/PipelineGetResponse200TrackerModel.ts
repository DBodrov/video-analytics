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
 * Описание модели трекера
 * @export
 * @interface PipelineGetResponse200TrackerModel
 */
export interface PipelineGetResponse200TrackerModel {
    /**
     * Идентификатор модели
     * @type {number}
     * @memberof PipelineGetResponse200TrackerModel
     */
    id: number;
    /**
     * Параметры модели
     * @type {object}
     * @memberof PipelineGetResponse200TrackerModel
     */
    parameters: object;
}

export function PipelineGetResponse200TrackerModelFromJSON(json: any): PipelineGetResponse200TrackerModel {
    return PipelineGetResponse200TrackerModelFromJSONTyped(json, false);
}

export function PipelineGetResponse200TrackerModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): PipelineGetResponse200TrackerModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'parameters': json['parameters'],
    };
}

export function PipelineGetResponse200TrackerModelToJSON(value?: PipelineGetResponse200TrackerModel | null): any {
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


