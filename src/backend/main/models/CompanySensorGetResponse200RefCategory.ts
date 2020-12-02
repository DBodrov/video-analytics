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
 * Категория датчика
 * @export
 * @interface CompanySensorGetResponse200RefCategory
 */
export interface CompanySensorGetResponse200RefCategory {
    /**
     * Идентификатор категории
     * @type {number}
     * @memberof CompanySensorGetResponse200RefCategory
     */
    id: number;
    /**
     * Краткое название категории
     * @type {string}
     * @memberof CompanySensorGetResponse200RefCategory
     */
    name: string;
    /**
     * Код категории
     * @type {string}
     * @memberof CompanySensorGetResponse200RefCategory
     */
    code: string;
    /**
     * Описание категории
     * @type {string}
     * @memberof CompanySensorGetResponse200RefCategory
     */
    description: string;
}

export function CompanySensorGetResponse200RefCategoryFromJSON(json: any): CompanySensorGetResponse200RefCategory {
    return CompanySensorGetResponse200RefCategoryFromJSONTyped(json, false);
}

export function CompanySensorGetResponse200RefCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanySensorGetResponse200RefCategory {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'code': json['code'],
        'description': json['description'],
    };
}

export function CompanySensorGetResponse200RefCategoryToJSON(value?: CompanySensorGetResponse200RefCategory | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'code': value.code,
        'description': value.description,
    };
}


