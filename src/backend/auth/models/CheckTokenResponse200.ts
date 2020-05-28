/* tslint:disable */
/* eslint-disable */
/**
 * auth
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    CheckTokenResponse200Payload,
    CheckTokenResponse200PayloadFromJSON,
    CheckTokenResponse200PayloadFromJSONTyped,
    CheckTokenResponse200PayloadToJSON,
} from './';

/**
 * 
 * @export
 * @interface CheckTokenResponse200
 */
export interface CheckTokenResponse200 {
    /**
     * 
     * @type {CheckTokenResponse200Payload}
     * @memberof CheckTokenResponse200
     */
    payload: CheckTokenResponse200Payload;
}

export function CheckTokenResponse200FromJSON(json: any): CheckTokenResponse200 {
    return CheckTokenResponse200FromJSONTyped(json, false);
}

export function CheckTokenResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckTokenResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'payload': CheckTokenResponse200PayloadFromJSON(json['payload']),
    };
}

export function CheckTokenResponse200ToJSON(value?: CheckTokenResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'payload': CheckTokenResponse200PayloadToJSON(value.payload),
    };
}


