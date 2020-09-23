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
 * @interface CompanySensorsGetResponse200Sensors
 */
export interface CompanySensorsGetResponse200Sensors {
    /**
     * Идентификатор датчика
     * @type {number}
     * @memberof CompanySensorsGetResponse200Sensors
     */
    id: number;
    /**
     * Код датчика
     * @type {string}
     * @memberof CompanySensorsGetResponse200Sensors
     */
    code: string;
    /**
     * Краткое название датчика
     * @type {string}
     * @memberof CompanySensorsGetResponse200Sensors
     */
    name: string;
    /**
     * Описание датчика
     * @type {string}
     * @memberof CompanySensorsGetResponse200Sensors
     */
    description: string;
    /**
     * Отображаемый датчик по умолчанию
     * @type {boolean}
     * @memberof CompanySensorsGetResponse200Sensors
     */
    byDefault: boolean;
    /**
     * Идентификатор компании
     * @type {number}
     * @memberof CompanySensorsGetResponse200Sensors
     */
    companyId: number;
    /**
     * Идентификатор площадки
     * @type {number}
     * @memberof CompanySensorsGetResponse200Sensors
     */
    locationId?: number;
    /**
     * Расположение датчика
     * @type {string}
     * @memberof CompanySensorsGetResponse200Sensors
     */
    address?: string;
    /**
     * Адрес видеопотока
     * @type {string}
     * @memberof CompanySensorsGetResponse200Sensors
     */
    url?: string;
    /**
     * 
     * @type {SensorsGetResponse200Category}
     * @memberof CompanySensorsGetResponse200Sensors
     */
    category: SensorsGetResponse200Category;
}

export function CompanySensorsGetResponse200SensorsFromJSON(json: any): CompanySensorsGetResponse200Sensors {
    return CompanySensorsGetResponse200SensorsFromJSONTyped(json, false);
}

export function CompanySensorsGetResponse200SensorsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanySensorsGetResponse200Sensors {
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
        'locationId': !exists(json, 'location_id') ? undefined : json['location_id'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'category': SensorsGetResponse200CategoryFromJSON(json['category']),
    };
}

export function CompanySensorsGetResponse200SensorsToJSON(value?: CompanySensorsGetResponse200Sensors | null): any {
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
        'location_id': value.locationId,
        'address': value.address,
        'url': value.url,
        'category': SensorsGetResponse200CategoryToJSON(value.category),
    };
}


