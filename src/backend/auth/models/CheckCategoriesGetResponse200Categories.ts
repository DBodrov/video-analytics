/* tslint:disable */
/* eslint-disable */
/**
 * auth
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.10.dev66
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Описание категории
 * @export
 * @interface CheckCategoriesGetResponse200Categories
 */
export interface CheckCategoriesGetResponse200Categories {
    /**
     * Идентификатор категории
     * @type {number}
     * @memberof CheckCategoriesGetResponse200Categories
     */
    id: number;
    /**
     * Код категории
     * @type {string}
     * @memberof CheckCategoriesGetResponse200Categories
     */
    code: string;
    /**
     * Краткое название категории
     * @type {string}
     * @memberof CheckCategoriesGetResponse200Categories
     */
    name: string;
    /**
     * Описание категории
     * @type {string}
     * @memberof CheckCategoriesGetResponse200Categories
     */
    description: string;
}

export function CheckCategoriesGetResponse200CategoriesFromJSON(json: any): CheckCategoriesGetResponse200Categories {
    return CheckCategoriesGetResponse200CategoriesFromJSONTyped(json, false);
}

export function CheckCategoriesGetResponse200CategoriesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckCategoriesGetResponse200Categories {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'code': json['code'],
        'name': json['name'],
        'description': json['description'],
    };
}

export function CheckCategoriesGetResponse200CategoriesToJSON(value?: CheckCategoriesGetResponse200Categories | null): any {
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
    };
}


