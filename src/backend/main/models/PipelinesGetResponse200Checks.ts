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
    PipelineGetResponse200Model,
    PipelineGetResponse200ModelFromJSON,
    PipelineGetResponse200ModelFromJSONTyped,
    PipelineGetResponse200ModelToJSON,
} from './';

/**
 * Описание проверки
 * @export
 * @interface PipelinesGetResponse200Checks
 */
export interface PipelinesGetResponse200Checks {
    /**
     * Идентификатор проверки
     * @type {number}
     * @memberof PipelinesGetResponse200Checks
     */
    id: number;
    /**
     * 
     * @type {PipelineGetResponse200Model}
     * @memberof PipelinesGetResponse200Checks
     */
    model?: PipelineGetResponse200Model;
    /**
     * Список следующих проверок за текущей
     * @type {Array<number>}
     * @memberof PipelinesGetResponse200Checks
     */
    nextIds?: Array<number>;
    /**
     * Параметры проверки
     * @type {object}
     * @memberof PipelinesGetResponse200Checks
     */
    parameters: object;
}

export function PipelinesGetResponse200ChecksFromJSON(json: any): PipelinesGetResponse200Checks {
    return PipelinesGetResponse200ChecksFromJSONTyped(json, false);
}

export function PipelinesGetResponse200ChecksFromJSONTyped(json: any, ignoreDiscriminator: boolean): PipelinesGetResponse200Checks {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'model': !exists(json, 'model') ? undefined : PipelineGetResponse200ModelFromJSON(json['model']),
        'nextIds': !exists(json, 'next_ids') ? undefined : json['next_ids'],
        'parameters': json['parameters'],
    };
}

export function PipelinesGetResponse200ChecksToJSON(value?: PipelinesGetResponse200Checks | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'model': PipelineGetResponse200ModelToJSON(value.model),
        'next_ids': value.nextIds,
        'parameters': value.parameters,
    };
}


