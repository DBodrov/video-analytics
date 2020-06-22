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
/**
 * 
 * @export
 * @interface CheckTokenResponse200Payload
 */
export interface CheckTokenResponse200Payload {
    /**
     * 
     * @type {number}
     * @memberof CheckTokenResponse200Payload
     */
    companyId?: number;
    /**
     * 
     * @type {number}
     * @memberof CheckTokenResponse200Payload
     */
    userId: number;
}

export function CheckTokenResponse200PayloadFromJSON(json: any): CheckTokenResponse200Payload {
    return CheckTokenResponse200PayloadFromJSONTyped(json, false);
}

export function CheckTokenResponse200PayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckTokenResponse200Payload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'companyId': !exists(json, 'company_id') ? undefined : json['company_id'],
        'userId': json['user_id'],
    };
}

export function CheckTokenResponse200PayloadToJSON(value?: CheckTokenResponse200Payload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'company_id': value.companyId,
        'user_id': value.userId,
    };
}

