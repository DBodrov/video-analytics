/* tslint:disable */
/* eslint-disable */
/**
 * auth
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.13.dev86
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ModelsGetResponse200Tocs,
    ModelsGetResponse200TocsFromJSON,
    ModelsGetResponse200TocsFromJSONTyped,
    ModelsGetResponse200TocsToJSON,
} from './';

/**
 * Сведения о модели
 * @export
 * @interface ModelsGetResponse200Models
 */
export interface ModelsGetResponse200Models {
    /**
     * Идентификатор модели
     * @type {number}
     * @memberof ModelsGetResponse200Models
     */
    id: number;
    /**
     * Код модели
     * @type {string}
     * @memberof ModelsGetResponse200Models
     */
    code: string;
    /**
     * Краткое название модели
     * @type {string}
     * @memberof ModelsGetResponse200Models
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ModelsGetResponse200Models
     */
    description: string;
    /**
     * 
     * @type {Array<ModelsGetResponse200Tocs>}
     * @memberof ModelsGetResponse200Models
     */
    tocs: Array<ModelsGetResponse200Tocs>;
}

export function ModelsGetResponse200ModelsFromJSON(json: any): ModelsGetResponse200Models {
    return ModelsGetResponse200ModelsFromJSONTyped(json, false);
}

export function ModelsGetResponse200ModelsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsGetResponse200Models {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'code': json['code'],
        'name': json['name'],
        'description': json['description'],
        'tocs': ((json['tocs'] as Array<any>).map(ModelsGetResponse200TocsFromJSON)),
    };
}

export function ModelsGetResponse200ModelsToJSON(value?: ModelsGetResponse200Models | null): any {
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
        'tocs': ((value.tocs as Array<any>).map(ModelsGetResponse200TocsToJSON)),
    };
}


