/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.19.dev153
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    PipelineGetResponse200TrackerModel,
    PipelineGetResponse200TrackerModelFromJSON,
    PipelineGetResponse200TrackerModelFromJSONTyped,
    PipelineGetResponse200TrackerModelToJSON,
} from './';

/**
 * Описание трекера
 * @export
 * @interface PipelineGetResponse200Tracker
 */
export interface PipelineGetResponse200Tracker {
    /**
     * Идентификатор трекера
     * @type {number}
     * @memberof PipelineGetResponse200Tracker
     */
    id: number;
    /**
     * 
     * @type {PipelineGetResponse200TrackerModel}
     * @memberof PipelineGetResponse200Tracker
     */
    model: PipelineGetResponse200TrackerModel;
    /**
     * Параметры трекера
     * @type {object}
     * @memberof PipelineGetResponse200Tracker
     */
    parameters: object;
}

export function PipelineGetResponse200TrackerFromJSON(json: any): PipelineGetResponse200Tracker {
    return PipelineGetResponse200TrackerFromJSONTyped(json, false);
}

export function PipelineGetResponse200TrackerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PipelineGetResponse200Tracker {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'model': PipelineGetResponse200TrackerModelFromJSON(json['model']),
        'parameters': json['parameters'],
    };
}

export function PipelineGetResponse200TrackerToJSON(value?: PipelineGetResponse200Tracker | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'model': PipelineGetResponse200TrackerModelToJSON(value.model),
        'parameters': value.parameters,
    };
}


