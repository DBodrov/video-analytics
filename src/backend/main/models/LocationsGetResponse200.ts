/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.17.dev126
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    LocationsGetResponse200Locations,
    LocationsGetResponse200LocationsFromJSON,
    LocationsGetResponse200LocationsFromJSONTyped,
    LocationsGetResponse200LocationsToJSON,
} from './';

/**
 * 
 * @export
 * @interface LocationsGetResponse200
 */
export interface LocationsGetResponse200 {
    /**
     * 
     * @type {Array<LocationsGetResponse200Locations>}
     * @memberof LocationsGetResponse200
     */
    locations: Array<LocationsGetResponse200Locations>;
}

export function LocationsGetResponse200FromJSON(json: any): LocationsGetResponse200 {
    return LocationsGetResponse200FromJSONTyped(json, false);
}

export function LocationsGetResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): LocationsGetResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'locations': ((json['locations'] as Array<any>).map(LocationsGetResponse200LocationsFromJSON)),
    };
}

export function LocationsGetResponse200ToJSON(value?: LocationsGetResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'locations': ((value.locations as Array<any>).map(LocationsGetResponse200LocationsToJSON)),
    };
}


