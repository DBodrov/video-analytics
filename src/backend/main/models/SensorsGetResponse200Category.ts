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
/**
 * Категория датчика
 * @export
 * @interface SensorsGetResponse200Category
 */
export interface SensorsGetResponse200Category {
    /**
     * Идентификатор категории
     * @type {number}
     * @memberof SensorsGetResponse200Category
     */
    id: number;
    /**
     * Краткое название категории
     * @type {string}
     * @memberof SensorsGetResponse200Category
     */
    name: string;
    /**
     * Категория
     * @type {string}
     * @memberof SensorsGetResponse200Category
     */
    code: string;
    /**
     * Описание категории
     * @type {string}
     * @memberof SensorsGetResponse200Category
     */
    description: string;
}

export function SensorsGetResponse200CategoryFromJSON(json: any): SensorsGetResponse200Category {
    return SensorsGetResponse200CategoryFromJSONTyped(json, false);
}

export function SensorsGetResponse200CategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): SensorsGetResponse200Category {
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

export function SensorsGetResponse200CategoryToJSON(value?: SensorsGetResponse200Category | null): any {
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


