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
/**
 * Сведения о детекторе
 * @export
 * @interface PipelinesGetResponse200ConfDetector
 */
export interface PipelinesGetResponse200ConfDetector {
    /**
     * Идентификатор проверки
     * @type {number}
     * @memberof PipelinesGetResponse200ConfDetector
     */
    id: number;
    /**
     * Идентификатор модели
     * @type {number}
     * @memberof PipelinesGetResponse200ConfDetector
     */
    modelId: number;
}

export function PipelinesGetResponse200ConfDetectorFromJSON(json: any): PipelinesGetResponse200ConfDetector {
    return PipelinesGetResponse200ConfDetectorFromJSONTyped(json, false);
}

export function PipelinesGetResponse200ConfDetectorFromJSONTyped(json: any, ignoreDiscriminator: boolean): PipelinesGetResponse200ConfDetector {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'modelId': json['model_id'],
    };
}

export function PipelinesGetResponse200ConfDetectorToJSON(value?: PipelinesGetResponse200ConfDetector | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'model_id': value.modelId,
    };
}

