/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.19.dev163
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Сведения о датчике компании
 * @export
 * @interface CompanySensorRequest
 */
export interface CompanySensorRequest {
    /**
     * Название датчика
     * @type {string}
     * @memberof CompanySensorRequest
     */
    name?: string;
    /**
     * Описание датчика
     * @type {string}
     * @memberof CompanySensorRequest
     */
    description?: string;
    /**
     * Идентификатор площадки
     * @type {number}
     * @memberof CompanySensorRequest
     */
    locationId?: number;
    /**
     * Расположение датчика
     * @type {string}
     * @memberof CompanySensorRequest
     */
    address?: string;
    /**
     * Адрес видеопотока
     * @type {string}
     * @memberof CompanySensorRequest
     */
    url?: string;
}

export function CompanySensorRequestFromJSON(json: any): CompanySensorRequest {
    return CompanySensorRequestFromJSONTyped(json, false);
}

export function CompanySensorRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanySensorRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'locationId': !exists(json, 'location_id') ? undefined : json['location_id'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function CompanySensorRequestToJSON(value?: CompanySensorRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'location_id': value.locationId,
        'address': value.address,
        'url': value.url,
    };
}

