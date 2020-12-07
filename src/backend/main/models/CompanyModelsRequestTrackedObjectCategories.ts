/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.19.dev153
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Категория отслеживаемого объекта
 * @export
 * @interface CompanyModelsRequestTrackedObjectCategories
 */
export interface CompanyModelsRequestTrackedObjectCategories {
    /**
     * Код категории отслеживаемого объекта в рамках модели
     * @type {string}
     * @memberof CompanyModelsRequestTrackedObjectCategories
     */
    code: string;
    /**
     * Краткое название категории отслеживаемого объекта
     * @type {string}
     * @memberof CompanyModelsRequestTrackedObjectCategories
     */
    name: string;
    /**
     * Описание категории отслеживаемого объекта
     * @type {string}
     * @memberof CompanyModelsRequestTrackedObjectCategories
     */
    description: string;
}

export function CompanyModelsRequestTrackedObjectCategoriesFromJSON(json: any): CompanyModelsRequestTrackedObjectCategories {
    return CompanyModelsRequestTrackedObjectCategoriesFromJSONTyped(json, false);
}

export function CompanyModelsRequestTrackedObjectCategoriesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanyModelsRequestTrackedObjectCategories {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'name': json['name'],
        'description': json['description'],
    };
}

export function CompanyModelsRequestTrackedObjectCategoriesToJSON(value?: CompanyModelsRequestTrackedObjectCategories | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'name': value.name,
        'description': value.description,
    };
}


