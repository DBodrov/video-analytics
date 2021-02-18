/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.19.dev162
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
 * @interface CompanyModelsRequestModel
 */
export interface CompanyModelsRequestModel {
    /**
     * Код модели
     * @type {string}
     * @memberof CompanyModelsRequestModel
     */
    code: string;
    /**
     * Краткое название модели
     * @type {string}
     * @memberof CompanyModelsRequestModel
     */
    name: string;
    /**
     * Описание модели
     * @type {string}
     * @memberof CompanyModelsRequestModel
     */
    description: string;
}

export function CompanyModelsRequestModelFromJSON(json: any): CompanyModelsRequestModel {
    return CompanyModelsRequestModelFromJSONTyped(json, false);
}

export function CompanyModelsRequestModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanyModelsRequestModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'name': json['name'],
        'description': json['description'],
    };
}

export function CompanyModelsRequestModelToJSON(value?: CompanyModelsRequestModel | null): any {
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


