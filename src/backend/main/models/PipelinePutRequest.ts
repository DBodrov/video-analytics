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
 * 
 * @export
 * @interface PipelinePutRequest
 */
export interface PipelinePutRequest {
    /**
     * Признак активного конвейера
     * @type {boolean}
     * @memberof PipelinePutRequest
     */
    enabled: boolean;
}

export function PipelinePutRequestFromJSON(json: any): PipelinePutRequest {
    return PipelinePutRequestFromJSONTyped(json, false);
}

export function PipelinePutRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PipelinePutRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'enabled': json['enabled'],
    };
}

export function PipelinePutRequestToJSON(value?: PipelinePutRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'enabled': value.enabled,
    };
}


