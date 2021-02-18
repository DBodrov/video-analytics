/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.19.dev162
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CompanySensorsRequest
 */
export interface CompanySensorsRequest {
    /**
     * Название датчика
     * @type {string}
     * @memberof CompanySensorsRequest
     */
    name: string;
    /**
     * Описание датчика
     * @type {string}
     * @memberof CompanySensorsRequest
     */
    description: string;
    /**
     * Идентификатор площадки компании
     * @type {number}
     * @memberof CompanySensorsRequest
     */
    locationId?: number;
    /**
     * Расположение датчика
     * @type {string}
     * @memberof CompanySensorsRequest
     */
    address?: string;
    /**
     * Адрес видеопотока
     * @type {string}
     * @memberof CompanySensorsRequest
     */
    url?: string;
}

export function CompanySensorsRequestFromJSON(json: any): CompanySensorsRequest {
    return CompanySensorsRequestFromJSONTyped(json, false);
}

export function CompanySensorsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanySensorsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': json['description'],
        'locationId': !exists(json, 'location_id') ? undefined : json['location_id'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function CompanySensorsRequestToJSON(value?: CompanySensorsRequest | null): any {
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


