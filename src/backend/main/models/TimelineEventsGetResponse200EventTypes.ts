/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.15.dev108
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Сведения о категории события
 * @export
 * @interface TimelineEventsGetResponse200EventTypes
 */
export interface TimelineEventsGetResponse200EventTypes {
    /**
     * Идентификатор категории события
     * @type {number}
     * @memberof TimelineEventsGetResponse200EventTypes
     */
    id: number;
    /**
     * Код категории события
     * @type {string}
     * @memberof TimelineEventsGetResponse200EventTypes
     */
    code: string;
    /**
     * Название категории события
     * @type {string}
     * @memberof TimelineEventsGetResponse200EventTypes
     */
    name: string;
    /**
     * Описание категории события
     * @type {string}
     * @memberof TimelineEventsGetResponse200EventTypes
     */
    description: string;
}

export function TimelineEventsGetResponse200EventTypesFromJSON(json: any): TimelineEventsGetResponse200EventTypes {
    return TimelineEventsGetResponse200EventTypesFromJSONTyped(json, false);
}

export function TimelineEventsGetResponse200EventTypesFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimelineEventsGetResponse200EventTypes {
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

export function TimelineEventsGetResponse200EventTypesToJSON(value?: TimelineEventsGetResponse200EventTypes | null): any {
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

