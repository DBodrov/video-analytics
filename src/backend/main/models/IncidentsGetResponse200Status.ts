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
 * Статус события
 * @export
 * @interface IncidentsGetResponse200Status
 */
export interface IncidentsGetResponse200Status {
    /**
     * Идентификатор текущего статуса
     * @type {number}
     * @memberof IncidentsGetResponse200Status
     */
    currentId?: number;
    /**
     * Перечень идентификаторов следующих статусов
     * @type {Array<number>}
     * @memberof IncidentsGetResponse200Status
     */
    nextIds: Array<number>;
}

export function IncidentsGetResponse200StatusFromJSON(json: any): IncidentsGetResponse200Status {
    return IncidentsGetResponse200StatusFromJSONTyped(json, false);
}

export function IncidentsGetResponse200StatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): IncidentsGetResponse200Status {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currentId': !exists(json, 'current_id') ? undefined : json['current_id'],
        'nextIds': json['next_ids'],
    };
}

export function IncidentsGetResponse200StatusToJSON(value?: IncidentsGetResponse200Status | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'current_id': value.currentId,
        'next_ids': value.nextIds,
    };
}


