/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.19.dev162
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PipelineSensorPatchRequest
 */
export interface PipelineSensorPatchRequest {
    /**
     * 
     * @type {object}
     * @memberof PipelineSensorPatchRequest
     */
    deploy: object;
}

export function PipelineSensorPatchRequestFromJSON(json: any): PipelineSensorPatchRequest {
    return PipelineSensorPatchRequestFromJSONTyped(json, false);
}

export function PipelineSensorPatchRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PipelineSensorPatchRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'deploy': json['deploy'],
    };
}

export function PipelineSensorPatchRequestToJSON(value?: PipelineSensorPatchRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'deploy': value.deploy,
    };
}


