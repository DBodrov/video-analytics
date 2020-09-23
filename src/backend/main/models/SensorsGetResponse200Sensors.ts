/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.18.dev138
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    SensorsGetResponse200Category,
    SensorsGetResponse200CategoryFromJSON,
    SensorsGetResponse200CategoryFromJSONTyped,
    SensorsGetResponse200CategoryToJSON,
} from './';

/**
 * Сведения о датчике
 * @export
 * @interface SensorsGetResponse200Sensors
 */
export interface SensorsGetResponse200Sensors {
    /**
     * Идентификатор датчика
     * @type {number}
     * @memberof SensorsGetResponse200Sensors
     */
    id: number;
    /**
     * Код датчика
     * @type {string}
     * @memberof SensorsGetResponse200Sensors
     */
    code: string;
    /**
     * Краткое название датчика
     * @type {string}
     * @memberof SensorsGetResponse200Sensors
     */
    name: string;
    /**
     * Описание датчика
     * @type {string}
     * @memberof SensorsGetResponse200Sensors
     */
    description: string;
    /**
     * Отображаемый датчик по умолчанию
     * @type {boolean}
     * @memberof SensorsGetResponse200Sensors
     */
    byDefault: boolean;
    /**
     * Идентификатор компании
     * @type {number}
     * @memberof SensorsGetResponse200Sensors
     */
    companyId: number;
    /**
     * 
     * @type {SensorsGetResponse200Category}
     * @memberof SensorsGetResponse200Sensors
     */
    category: SensorsGetResponse200Category;
}

export function SensorsGetResponse200SensorsFromJSON(json: any): SensorsGetResponse200Sensors {
    return SensorsGetResponse200SensorsFromJSONTyped(json, false);
}

export function SensorsGetResponse200SensorsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SensorsGetResponse200Sensors {
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
        'category': SensorsGetResponse200CategoryFromJSON(json['category']),
    };
}

export function SensorsGetResponse200SensorsToJSON(value?: SensorsGetResponse200Sensors | null): any {
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
        'category': SensorsGetResponse200CategoryToJSON(value.category),
    };
}


