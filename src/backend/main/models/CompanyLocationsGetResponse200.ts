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
import {
    CompanyLocationsGetResponse200Locations,
    CompanyLocationsGetResponse200LocationsFromJSON,
    CompanyLocationsGetResponse200LocationsFromJSONTyped,
    CompanyLocationsGetResponse200LocationsToJSON,
} from './';

/**
 * 
 * @export
 * @interface CompanyLocationsGetResponse200
 */
export interface CompanyLocationsGetResponse200 {
    /**
     * 
     * @type {Array<CompanyLocationsGetResponse200Locations>}
     * @memberof CompanyLocationsGetResponse200
     */
    locations: Array<CompanyLocationsGetResponse200Locations>;
}

export function CompanyLocationsGetResponse200FromJSON(json: any): CompanyLocationsGetResponse200 {
    return CompanyLocationsGetResponse200FromJSONTyped(json, false);
}

export function CompanyLocationsGetResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanyLocationsGetResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'locations': ((json['locations'] as Array<any>).map(CompanyLocationsGetResponse200LocationsFromJSON)),
    };
}

export function CompanyLocationsGetResponse200ToJSON(value?: CompanyLocationsGetResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'locations': ((value.locations as Array<any>).map(CompanyLocationsGetResponse200LocationsToJSON)),
    };
}


