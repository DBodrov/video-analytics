/* tslint:disable */
/* eslint-disable */
/**
 * auth
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.12.dev74
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Сведения о модели
 * @export
 * @interface TocsGetResponse200Models
 */
export interface TocsGetResponse200Models {
    /**
     * Идентификатор модели
     * @type {number}
     * @memberof TocsGetResponse200Models
     */
    id: number;
    /**
     * Код модели
     * @type {string}
     * @memberof TocsGetResponse200Models
     */
    code: string;
    /**
     * Краткое название модели
     * @type {string}
     * @memberof TocsGetResponse200Models
     */
    name: string;
    /**
     * Описание модели
     * @type {string}
     * @memberof TocsGetResponse200Models
     */
    description: string;
}

export function TocsGetResponse200ModelsFromJSON(json: any): TocsGetResponse200Models {
    return TocsGetResponse200ModelsFromJSONTyped(json, false);
}

export function TocsGetResponse200ModelsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TocsGetResponse200Models {
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

export function TocsGetResponse200ModelsToJSON(value?: TocsGetResponse200Models | null): any {
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


