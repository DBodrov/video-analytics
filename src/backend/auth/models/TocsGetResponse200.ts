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
    TocsGetResponse200Tocs,
    TocsGetResponse200TocsFromJSON,
    TocsGetResponse200TocsFromJSONTyped,
    TocsGetResponse200TocsToJSON,
} from './';

/**
 * 
 * @export
 * @interface TocsGetResponse200
 */
export interface TocsGetResponse200 {
    /**
     * 
     * @type {Array<TocsGetResponse200Tocs>}
     * @memberof TocsGetResponse200
     */
    tocs: Array<TocsGetResponse200Tocs>;
}

export function TocsGetResponse200FromJSON(json: any): TocsGetResponse200 {
    return TocsGetResponse200FromJSONTyped(json, false);
}

export function TocsGetResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): TocsGetResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tocs': ((json['tocs'] as Array<any>).map(TocsGetResponse200TocsFromJSON)),
    };
}

export function TocsGetResponse200ToJSON(value?: TocsGetResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tocs': ((value.tocs as Array<any>).map(TocsGetResponse200TocsToJSON)),
    };
}


