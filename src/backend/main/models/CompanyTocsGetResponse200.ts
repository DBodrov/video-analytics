/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.15.dev108
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    TocsGetResponse200TrackedObjectCategories,
    TocsGetResponse200TrackedObjectCategoriesFromJSON,
    TocsGetResponse200TrackedObjectCategoriesFromJSONTyped,
    TocsGetResponse200TrackedObjectCategoriesToJSON,
} from './';

/**
 * 
 * @export
 * @interface CompanyTocsGetResponse200
 */
export interface CompanyTocsGetResponse200 {
    /**
     * 
     * @type {Array<TocsGetResponse200TrackedObjectCategories>}
     * @memberof CompanyTocsGetResponse200
     */
    trackedObjectCategories: Array<TocsGetResponse200TrackedObjectCategories>;
}

export function CompanyTocsGetResponse200FromJSON(json: any): CompanyTocsGetResponse200 {
    return CompanyTocsGetResponse200FromJSONTyped(json, false);
}

export function CompanyTocsGetResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanyTocsGetResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'trackedObjectCategories': ((json['tracked_object_categories'] as Array<any>).map(TocsGetResponse200TrackedObjectCategoriesFromJSON)),
    };
}

export function CompanyTocsGetResponse200ToJSON(value?: CompanyTocsGetResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tracked_object_categories': ((value.trackedObjectCategories as Array<any>).map(TocsGetResponse200TrackedObjectCategoriesToJSON)),
    };
}


