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
    ChecksGetResponse200Checks,
    ChecksGetResponse200ChecksFromJSON,
    ChecksGetResponse200ChecksFromJSONTyped,
    ChecksGetResponse200ChecksToJSON,
} from './';

/**
 * 
 * @export
 * @interface ChecksGetResponse200
 */
export interface ChecksGetResponse200 {
    /**
     * 
     * @type {Array<ChecksGetResponse200Checks>}
     * @memberof ChecksGetResponse200
     */
    checks: Array<ChecksGetResponse200Checks>;
}

export function ChecksGetResponse200FromJSON(json: any): ChecksGetResponse200 {
    return ChecksGetResponse200FromJSONTyped(json, false);
}

export function ChecksGetResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): ChecksGetResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'checks': ((json['checks'] as Array<any>).map(ChecksGetResponse200ChecksFromJSON)),
    };
}

export function ChecksGetResponse200ToJSON(value?: ChecksGetResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'checks': ((value.checks as Array<any>).map(ChecksGetResponse200ChecksToJSON)),
    };
}


