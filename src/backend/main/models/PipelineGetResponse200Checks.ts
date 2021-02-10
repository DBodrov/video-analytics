/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.19.dev161
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Описание проверки
 * @export
 * @interface PipelineGetResponse200Checks
 */
export interface PipelineGetResponse200Checks {
    /**
     * Идентификатор проверки
     * @type {number}
     * @memberof PipelineGetResponse200Checks
     */
    id: number;
    /**
     * Признак активной проверки
     * @type {boolean}
     * @memberof PipelineGetResponse200Checks
     */
    enabled: boolean;
    /**
     * Список следующих проверок за текущей
     * @type {Array<number>}
     * @memberof PipelineGetResponse200Checks
     */
    nextIds: Array<number>;
    /**
     * Параметры проверки
     * @type {object}
     * @memberof PipelineGetResponse200Checks
     */
    parameters: object;
}

export function PipelineGetResponse200ChecksFromJSON(json: any): PipelineGetResponse200Checks {
    return PipelineGetResponse200ChecksFromJSONTyped(json, false);
}

export function PipelineGetResponse200ChecksFromJSONTyped(json: any, ignoreDiscriminator: boolean): PipelineGetResponse200Checks {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'enabled': json['enabled'],
        'nextIds': json['next_ids'],
        'parameters': json['parameters'],
    };
}

export function PipelineGetResponse200ChecksToJSON(value?: PipelineGetResponse200Checks | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'enabled': value.enabled,
        'next_ids': value.nextIds,
        'parameters': value.parameters,
    };
}


