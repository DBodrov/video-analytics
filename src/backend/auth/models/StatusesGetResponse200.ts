/* tslint:disable */
/* eslint-disable */
/**
 * auth
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.12.dev77
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    StatusesGetResponse200Statuses,
    StatusesGetResponse200StatusesFromJSON,
    StatusesGetResponse200StatusesFromJSONTyped,
    StatusesGetResponse200StatusesToJSON,
} from './';

/**
 * 
 * @export
 * @interface StatusesGetResponse200
 */
export interface StatusesGetResponse200 {
    /**
     * 
     * @type {Array<StatusesGetResponse200Statuses>}
     * @memberof StatusesGetResponse200
     */
    statuses: Array<StatusesGetResponse200Statuses>;
}

export function StatusesGetResponse200FromJSON(json: any): StatusesGetResponse200 {
    return StatusesGetResponse200FromJSONTyped(json, false);
}

export function StatusesGetResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): StatusesGetResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'statuses': ((json['statuses'] as Array<any>).map(StatusesGetResponse200StatusesFromJSON)),
    };
}

export function StatusesGetResponse200ToJSON(value?: StatusesGetResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'statuses': ((value.statuses as Array<any>).map(StatusesGetResponse200StatusesToJSON)),
    };
}


