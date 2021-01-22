/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.19.dev160
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
 * @interface SensorsGetResponse200Status
 */
export interface SensorsGetResponse200Status {
    /**
     * Идентификатор статуса
     * @type {number}
     * @memberof SensorsGetResponse200Status
     */
    id: number;
    /**
     * Код статуса
     * @type {string}
     * @memberof SensorsGetResponse200Status
     */
    code: string;
    /**
     * Название статуса
     * @type {string}
     * @memberof SensorsGetResponse200Status
     */
    name: string;
    /**
     * Описание статуса
     * @type {string}
     * @memberof SensorsGetResponse200Status
     */
    description: string;
}

export function SensorsGetResponse200StatusFromJSON(json: any): SensorsGetResponse200Status {
    return SensorsGetResponse200StatusFromJSONTyped(json, false);
}

export function SensorsGetResponse200StatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): SensorsGetResponse200Status {
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

export function SensorsGetResponse200StatusToJSON(value?: SensorsGetResponse200Status | null): any {
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


