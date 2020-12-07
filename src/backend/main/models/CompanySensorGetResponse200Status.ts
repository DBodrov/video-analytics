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
 * Статус датчика
 * @export
 * @interface CompanySensorGetResponse200Status
 */
export interface CompanySensorGetResponse200Status {
    /**
     * Код статуса
     * @type {string}
     * @memberof CompanySensorGetResponse200Status
     */
    code: string;
    /**
     * Название статуса
     * @type {string}
     * @memberof CompanySensorGetResponse200Status
     */
    name: string;
    /**
     * Описание статуса
     * @type {string}
     * @memberof CompanySensorGetResponse200Status
     */
    description: string;
}

export function CompanySensorGetResponse200StatusFromJSON(json: any): CompanySensorGetResponse200Status {
    return CompanySensorGetResponse200StatusFromJSONTyped(json, false);
}

export function CompanySensorGetResponse200StatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanySensorGetResponse200Status {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'name': json['name'],
        'description': json['description'],
    };
}

export function CompanySensorGetResponse200StatusToJSON(value?: CompanySensorGetResponse200Status | null): any {
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


