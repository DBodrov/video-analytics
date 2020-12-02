/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.19.dev148
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
 * @interface CompanyLocationsRequest
 */
export interface CompanyLocationsRequest {
    /**
     * Название площадки
     * @type {string}
     * @memberof CompanyLocationsRequest
     */
    name: string;
    /**
     * Описание площадки
     * @type {string}
     * @memberof CompanyLocationsRequest
     */
    description: string;
}

export function CompanyLocationsRequestFromJSON(json: any): CompanyLocationsRequest {
    return CompanyLocationsRequestFromJSONTyped(json, false);
}

export function CompanyLocationsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanyLocationsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': json['description'],
    };
}

export function CompanyLocationsRequestToJSON(value?: CompanyLocationsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
    };
}


