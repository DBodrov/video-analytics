/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.19.dev156
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    LocationsGetResponse200Category,
    LocationsGetResponse200CategoryFromJSON,
    LocationsGetResponse200CategoryFromJSONTyped,
    LocationsGetResponse200CategoryToJSON,
} from './';

/**
 * Сведения о площадке
 * @export
 * @interface LocationsGetResponse200Locations
 */
export interface LocationsGetResponse200Locations {
    /**
     * Идентификатор площадки
     * @type {number}
     * @memberof LocationsGetResponse200Locations
     */
    id: number;
    /**
     * Код площадки
     * @type {string}
     * @memberof LocationsGetResponse200Locations
     */
    code: string;
    /**
     * Краткое название площадки
     * @type {string}
     * @memberof LocationsGetResponse200Locations
     */
    name: string;
    /**
     * Описание площадки
     * @type {string}
     * @memberof LocationsGetResponse200Locations
     */
    description: string;
    /**
     * Отображаемая площадка по умолчанию
     * @type {boolean}
     * @memberof LocationsGetResponse200Locations
     */
    byDefault: boolean;
    /**
     * Идентификатор компании
     * @type {number}
     * @memberof LocationsGetResponse200Locations
     */
    companyId: number;
    /**
     * 
     * @type {LocationsGetResponse200Category}
     * @memberof LocationsGetResponse200Locations
     */
    category: LocationsGetResponse200Category;
}

export function LocationsGetResponse200LocationsFromJSON(json: any): LocationsGetResponse200Locations {
    return LocationsGetResponse200LocationsFromJSONTyped(json, false);
}

export function LocationsGetResponse200LocationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocationsGetResponse200Locations {
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
        'category': LocationsGetResponse200CategoryFromJSON(json['category']),
    };
}

export function LocationsGetResponse200LocationsToJSON(value?: LocationsGetResponse200Locations | null): any {
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
        'category': LocationsGetResponse200CategoryToJSON(value.category),
    };
}


