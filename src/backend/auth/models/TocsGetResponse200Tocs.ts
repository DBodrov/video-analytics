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
    TocsGetResponse200Models,
    TocsGetResponse200ModelsFromJSON,
    TocsGetResponse200ModelsFromJSONTyped,
    TocsGetResponse200ModelsToJSON,
} from './';

/**
 * Сведения о категории
 * @export
 * @interface TocsGetResponse200Tocs
 */
export interface TocsGetResponse200Tocs {
    /**
     * Идентификатор категории
     * @type {number}
     * @memberof TocsGetResponse200Tocs
     */
    id: number;
    /**
     * Код категории
     * @type {string}
     * @memberof TocsGetResponse200Tocs
     */
    code: string;
    /**
     * Краткое название категории
     * @type {string}
     * @memberof TocsGetResponse200Tocs
     */
    name: string;
    /**
     * Описание категории
     * @type {string}
     * @memberof TocsGetResponse200Tocs
     */
    description: string;
    /**
     * Отображаемая категория умолчанию
     * @type {boolean}
     * @memberof TocsGetResponse200Tocs
     */
    byDefault: boolean;
    /**
     * Идентификатор компании
     * @type {number}
     * @memberof TocsGetResponse200Tocs
     */
    companyId?: number;
    /**
     * 
     * @type {Array<TocsGetResponse200Models>}
     * @memberof TocsGetResponse200Tocs
     */
    models: Array<TocsGetResponse200Models>;
}

export function TocsGetResponse200TocsFromJSON(json: any): TocsGetResponse200Tocs {
    return TocsGetResponse200TocsFromJSONTyped(json, false);
}

export function TocsGetResponse200TocsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TocsGetResponse200Tocs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'code': json['code'],
        'name': json['name'],
        'description': json['description'],
        'byDefault': json['by_default'],
        'companyId': !exists(json, 'company_id') ? undefined : json['company_id'],
        'models': ((json['models'] as Array<any>).map(TocsGetResponse200ModelsFromJSON)),
    };
}

export function TocsGetResponse200TocsToJSON(value?: TocsGetResponse200Tocs | null): any {
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
        'by_default': value.byDefault,
        'company_id': value.companyId,
        'models': ((value.models as Array<any>).map(TocsGetResponse200ModelsToJSON)),
    };
}


