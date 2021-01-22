/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.19.dev160
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
 * @interface EventStatusPostRequest
 */
export interface EventStatusPostRequest {
    /**
     * Идентификатор нового статуса
     * @type {number}
     * @memberof EventStatusPostRequest
     */
    statusId: number;
}

export function EventStatusPostRequestFromJSON(json: any): EventStatusPostRequest {
    return EventStatusPostRequestFromJSONTyped(json, false);
}

export function EventStatusPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventStatusPostRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'statusId': json['status_id'],
    };
}

export function EventStatusPostRequestToJSON(value?: EventStatusPostRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status_id': value.statusId,
    };
}


