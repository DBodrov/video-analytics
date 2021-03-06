/* tslint:disable */
/* eslint-disable */
/**
 * auth
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.13.dev86
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
 * @interface StatusChainsGetResponse200Relations
 */
export interface StatusChainsGetResponse200Relations {
    /**
     * Из какого статуса
     * @type {number}
     * @memberof StatusChainsGetResponse200Relations
     */
    fromStatusId: number;
    /**
     * В какой статус
     * @type {number}
     * @memberof StatusChainsGetResponse200Relations
     */
    toStatusId: number;
}

export function StatusChainsGetResponse200RelationsFromJSON(json: any): StatusChainsGetResponse200Relations {
    return StatusChainsGetResponse200RelationsFromJSONTyped(json, false);
}

export function StatusChainsGetResponse200RelationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): StatusChainsGetResponse200Relations {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fromStatusId': json['from_status_id'],
        'toStatusId': json['to_status_id'],
    };
}

export function StatusChainsGetResponse200RelationsToJSON(value?: StatusChainsGetResponse200Relations | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'from_status_id': value.fromStatusId,
        'to_status_id': value.toStatusId,
    };
}


