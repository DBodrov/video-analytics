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
import {
    PipelinesGetResponse200Pipelines,
    PipelinesGetResponse200PipelinesFromJSON,
    PipelinesGetResponse200PipelinesFromJSONTyped,
    PipelinesGetResponse200PipelinesToJSON,
} from './';

/**
 * 
 * @export
 * @interface PipelinesGetResponse200
 */
export interface PipelinesGetResponse200 {
    /**
     * 
     * @type {Array<PipelinesGetResponse200Pipelines>}
     * @memberof PipelinesGetResponse200
     */
    pipelines: Array<PipelinesGetResponse200Pipelines>;
}

export function PipelinesGetResponse200FromJSON(json: any): PipelinesGetResponse200 {
    return PipelinesGetResponse200FromJSONTyped(json, false);
}

export function PipelinesGetResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): PipelinesGetResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pipelines': ((json['pipelines'] as Array<any>).map(PipelinesGetResponse200PipelinesFromJSON)),
    };
}

export function PipelinesGetResponse200ToJSON(value?: PipelinesGetResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pipelines': ((value.pipelines as Array<any>).map(PipelinesGetResponse200PipelinesToJSON)),
    };
}


