/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.18.dev141
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    SensorsGetResponse200RefCategory,
    SensorsGetResponse200RefCategoryFromJSON,
    SensorsGetResponse200RefCategoryFromJSONTyped,
    SensorsGetResponse200RefCategoryToJSON,
} from './';

/**
 * Редко изменяемые справочные данные датчика
 * @export
 * @interface SensorsGetResponse200Ref
 */
export interface SensorsGetResponse200Ref {
    /**
     * Идентификатор датчика
     * @type {number}
     * @memberof SensorsGetResponse200Ref
     */
    id: number;
    /**
     * Код датчика
     * @type {string}
     * @memberof SensorsGetResponse200Ref
     */
    code: string;
    /**
     * Краткое название датчика
     * @type {string}
     * @memberof SensorsGetResponse200Ref
     */
    name: string;
    /**
     * Описание датчика
     * @type {string}
     * @memberof SensorsGetResponse200Ref
     */
    description: string;
    /**
     * Отображаемый датчик по умолчанию
     * @type {boolean}
     * @memberof SensorsGetResponse200Ref
     */
    byDefault: boolean;
    /**
     * Идентификатор компании
     * @type {number}
     * @memberof SensorsGetResponse200Ref
     */
    companyId: number;
    /**
     * 
     * @type {SensorsGetResponse200RefCategory}
     * @memberof SensorsGetResponse200Ref
     */
    category: SensorsGetResponse200RefCategory;
}

export function SensorsGetResponse200RefFromJSON(json: any): SensorsGetResponse200Ref {
    return SensorsGetResponse200RefFromJSONTyped(json, false);
}

export function SensorsGetResponse200RefFromJSONTyped(json: any, ignoreDiscriminator: boolean): SensorsGetResponse200Ref {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'code': json['code'],
        'name': json['name'],
        'description': json['description'],
        'byDefault': json['by_default'],
        'companyId': json['company_id'],
        'category': SensorsGetResponse200RefCategoryFromJSON(json['category']),
    };
}

export function SensorsGetResponse200RefToJSON(value?: SensorsGetResponse200Ref | null): any {
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
        'category': SensorsGetResponse200RefCategoryToJSON(value.category),
    };
}


