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
 * Статус события
 * @export
 * @interface IncidentGetResponse200IncidentStatus
 */
export interface IncidentGetResponse200IncidentStatus {
    /**
     * Идентификатор текущего статуса
     * @type {number}
     * @memberof IncidentGetResponse200IncidentStatus
     */
    currentId?: number;
    /**
     * Перечень идентификаторов следующих статусов
     * @type {Array<number>}
     * @memberof IncidentGetResponse200IncidentStatus
     */
    nextIds: Array<number>;
}

export function IncidentGetResponse200IncidentStatusFromJSON(json: any): IncidentGetResponse200IncidentStatus {
    return IncidentGetResponse200IncidentStatusFromJSONTyped(json, false);
}

export function IncidentGetResponse200IncidentStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): IncidentGetResponse200IncidentStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currentId': !exists(json, 'current_id') ? undefined : json['current_id'],
        'nextIds': json['next_ids'],
    };
}

export function IncidentGetResponse200IncidentStatusToJSON(value?: IncidentGetResponse200IncidentStatus | null): any {
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


