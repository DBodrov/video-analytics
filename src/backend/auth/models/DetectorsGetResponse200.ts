/* tslint:disable */
/* eslint-disable */
/**
 * auth
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.12.dev76
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Описание детектора
 * @export
 * @interface DetectorsGetResponse200
 */
export interface DetectorsGetResponse200 {
    /**
     * Идентификатор детектора
     * @type {number}
     * @memberof DetectorsGetResponse200
     */
    id: number;
    /**
     * Код детектора
     * @type {string}
     * @memberof DetectorsGetResponse200
     */
    code: string;
    /**
     * Краткое название детектора
     * @type {string}
     * @memberof DetectorsGetResponse200
     */
    name: string;
    /**
     * Описание детектора
     * @type {string}
     * @memberof DetectorsGetResponse200
     */
    description: string;
}

export function DetectorsGetResponse200FromJSON(json: any): DetectorsGetResponse200 {
    return DetectorsGetResponse200FromJSONTyped(json, false);
}

export function DetectorsGetResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): DetectorsGetResponse200 {
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

export function DetectorsGetResponse200ToJSON(value?: DetectorsGetResponse200 | null): any {
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


