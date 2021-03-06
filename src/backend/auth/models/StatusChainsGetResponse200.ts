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
import {
    StatusChainsGetResponse200Chains,
    StatusChainsGetResponse200ChainsFromJSON,
    StatusChainsGetResponse200ChainsFromJSONTyped,
    StatusChainsGetResponse200ChainsToJSON,
} from './';

/**
 * 
 * @export
 * @interface StatusChainsGetResponse200
 */
export interface StatusChainsGetResponse200 {
    /**
     * 
     * @type {Array<StatusChainsGetResponse200Chains>}
     * @memberof StatusChainsGetResponse200
     */
    chains: Array<StatusChainsGetResponse200Chains>;
}

export function StatusChainsGetResponse200FromJSON(json: any): StatusChainsGetResponse200 {
    return StatusChainsGetResponse200FromJSONTyped(json, false);
}

export function StatusChainsGetResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): StatusChainsGetResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'chains': ((json['chains'] as Array<any>).map(StatusChainsGetResponse200ChainsFromJSON)),
    };
}

export function StatusChainsGetResponse200ToJSON(value?: StatusChainsGetResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'chains': ((value.chains as Array<any>).map(StatusChainsGetResponse200ChainsToJSON)),
    };
}


