/* tslint:disable */
/* eslint-disable */
/**
 * auth
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.9.dev54
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
 * @interface ModelsRequestModel
 */
export interface ModelsRequestModel {
    /**
     * Код модели
     * @type {string}
     * @memberof ModelsRequestModel
     */
    code: string;
    /**
     * Краткое название модели
     * @type {string}
     * @memberof ModelsRequestModel
     */
    name: string;
    /**
     * Описание модели
     * @type {string}
     * @memberof ModelsRequestModel
     */
    description: string;
}

export function ModelsRequestModelFromJSON(json: any): ModelsRequestModel {
    return ModelsRequestModelFromJSONTyped(json, false);
}

export function ModelsRequestModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsRequestModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'name': json['name'],
        'description': json['description'],
    };
}

export function ModelsRequestModelToJSON(value?: ModelsRequestModel | null): any {
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

