/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.14.dev96
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ModelsGetResponse200TrackedObjectCategories,
    ModelsGetResponse200TrackedObjectCategoriesFromJSON,
    ModelsGetResponse200TrackedObjectCategoriesFromJSONTyped,
    ModelsGetResponse200TrackedObjectCategoriesToJSON,
} from './';

/**
 * Сведения о модели
 * @export
 * @interface ModelsGetResponse200Models
 */
export interface ModelsGetResponse200Models {
    /**
     * Идентификатор модели
     * @type {number}
     * @memberof ModelsGetResponse200Models
     */
    id: number;
    /**
     * Код модели
     * @type {string}
     * @memberof ModelsGetResponse200Models
     */
    code: string;
    /**
     * Краткое название модели
     * @type {string}
     * @memberof ModelsGetResponse200Models
     */
    name: string;
    /**
     * Описание модели
     * @type {string}
     * @memberof ModelsGetResponse200Models
     */
    description: string;
    /**
     * Идентификатор компании
     * @type {number}
     * @memberof ModelsGetResponse200Models
     */
    companyId: number;
    /**
     * 
     * @type {Array<ModelsGetResponse200TrackedObjectCategories>}
     * @memberof ModelsGetResponse200Models
     */
    trackedObjectCategories: Array<ModelsGetResponse200TrackedObjectCategories>;
}

export function ModelsGetResponse200ModelsFromJSON(json: any): ModelsGetResponse200Models {
    return ModelsGetResponse200ModelsFromJSONTyped(json, false);
}

export function ModelsGetResponse200ModelsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsGetResponse200Models {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'code': json['code'],
        'name': json['name'],
        'description': json['description'],
        'companyId': json['company_id'],
        'trackedObjectCategories': ((json['tracked_object_categories'] as Array<any>).map(ModelsGetResponse200TrackedObjectCategoriesFromJSON)),
    };
}

export function ModelsGetResponse200ModelsToJSON(value?: ModelsGetResponse200Models | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'code': value.code,
        'name': value.name,
        'description': value.description,
        'company_id': value.companyId,
        'tracked_object_categories': ((value.trackedObjectCategories as Array<any>).map(ModelsGetResponse200TrackedObjectCategoriesToJSON)),
    };
}

