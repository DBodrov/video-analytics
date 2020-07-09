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
 * Категория отслеживаемого объекта
 * @export
 * @interface ModelsGetResponse200Tocs
 */
export interface ModelsGetResponse200Tocs {
    /**
     * Идентификатор категории отслеживаемого объекта
     * @type {number}
     * @memberof ModelsGetResponse200Tocs
     */
    id: number;
    /**
     * Код категории отслеживаемого объекта
     * @type {string}
     * @memberof ModelsGetResponse200Tocs
     */
    code: string;
    /**
     * Краткое название категории отслеживаемого объекта
     * @type {string}
     * @memberof ModelsGetResponse200Tocs
     */
    name: string;
    /**
     * Описание категории отслеживаемого объекта
     * @type {string}
     * @memberof ModelsGetResponse200Tocs
     */
    description: string;
}

export function ModelsGetResponse200TocsFromJSON(json: any): ModelsGetResponse200Tocs {
    return ModelsGetResponse200TocsFromJSONTyped(json, false);
}

export function ModelsGetResponse200TocsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsGetResponse200Tocs {
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

export function ModelsGetResponse200TocsToJSON(value?: ModelsGetResponse200Tocs | null): any {
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


