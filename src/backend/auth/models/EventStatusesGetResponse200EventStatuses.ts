/* tslint:disable */
/* eslint-disable */
/**
 * auth
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.9.dev57
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Статус по событию
 * @export
 * @interface EventStatusesGetResponse200EventStatuses
 */
export interface EventStatusesGetResponse200EventStatuses {
    /**
     * Идентификатор статуса
     * @type {number}
     * @memberof EventStatusesGetResponse200EventStatuses
     */
    id: number;
    /**
     * Код статуса
     * @type {string}
     * @memberof EventStatusesGetResponse200EventStatuses
     */
    code: string;
    /**
     * Краткое название статуса
     * @type {string}
     * @memberof EventStatusesGetResponse200EventStatuses
     */
    name: string;
    /**
     * Описание статуса
     * @type {string}
     * @memberof EventStatusesGetResponse200EventStatuses
     */
    description: string;
}

export function EventStatusesGetResponse200EventStatusesFromJSON(json: any): EventStatusesGetResponse200EventStatuses {
    return EventStatusesGetResponse200EventStatusesFromJSONTyped(json, false);
}

export function EventStatusesGetResponse200EventStatusesFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventStatusesGetResponse200EventStatuses {
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

export function EventStatusesGetResponse200EventStatusesToJSON(value?: EventStatusesGetResponse200EventStatuses | null): any {
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


