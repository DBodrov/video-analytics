/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.19.dev146
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    CompanyModelsRequestModel,
    CompanyModelsRequestModelFromJSON,
    CompanyModelsRequestModelFromJSONTyped,
    CompanyModelsRequestModelToJSON,
    CompanyModelsRequestTrackedObjectCategories,
    CompanyModelsRequestTrackedObjectCategoriesFromJSON,
    CompanyModelsRequestTrackedObjectCategoriesFromJSONTyped,
    CompanyModelsRequestTrackedObjectCategoriesToJSON,
} from './';

/**
 * 
 * @export
 * @interface CompanyModelsRequest
 */
export interface CompanyModelsRequest {
    /**
     * 
     * @type {CompanyModelsRequestModel}
     * @memberof CompanyModelsRequest
     */
    model: CompanyModelsRequestModel;
    /**
     * 
     * @type {Array<CompanyModelsRequestTrackedObjectCategories>}
     * @memberof CompanyModelsRequest
     */
    trackedObjectCategories?: Array<CompanyModelsRequestTrackedObjectCategories>;
}

export function CompanyModelsRequestFromJSON(json: any): CompanyModelsRequest {
    return CompanyModelsRequestFromJSONTyped(json, false);
}

export function CompanyModelsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanyModelsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'model': CompanyModelsRequestModelFromJSON(json['model']),
        'trackedObjectCategories': !exists(json, 'tracked_object_categories') ? undefined : ((json['tracked_object_categories'] as Array<any>).map(CompanyModelsRequestTrackedObjectCategoriesFromJSON)),
    };
}

export function CompanyModelsRequestToJSON(value?: CompanyModelsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'model': CompanyModelsRequestModelToJSON(value.model),
        'tracked_object_categories': value.trackedObjectCategories === undefined ? undefined : ((value.trackedObjectCategories as Array<any>).map(CompanyModelsRequestTrackedObjectCategoriesToJSON)),
    };
}


