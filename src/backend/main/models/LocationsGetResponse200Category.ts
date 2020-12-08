/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.19.dev155
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Категория площадки
 * @export
 * @interface LocationsGetResponse200Category
 */
export interface LocationsGetResponse200Category {
    /**
     * Идентификатор категории
     * @type {number}
     * @memberof LocationsGetResponse200Category
     */
    id: number;
    /**
     * Краткое название категории
     * @type {string}
     * @memberof LocationsGetResponse200Category
     */
    name: string;
    /**
     * Код категории
     * @type {string}
     * @memberof LocationsGetResponse200Category
     */
    code: string;
    /**
     * Описание категории
     * @type {string}
     * @memberof LocationsGetResponse200Category
     */
    description: string;
}

export function LocationsGetResponse200CategoryFromJSON(json: any): LocationsGetResponse200Category {
    return LocationsGetResponse200CategoryFromJSONTyped(json, false);
}

export function LocationsGetResponse200CategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocationsGetResponse200Category {
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

export function LocationsGetResponse200CategoryToJSON(value?: LocationsGetResponse200Category | null): any {
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


