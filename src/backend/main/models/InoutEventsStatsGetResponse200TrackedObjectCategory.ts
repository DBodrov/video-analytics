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
/**
 * Сведения о категории отслеживаемых объектов
 * @export
 * @interface InoutEventsStatsGetResponse200TrackedObjectCategory
 */
export interface InoutEventsStatsGetResponse200TrackedObjectCategory {
    /**
     * Идентификатор категории отслеживаемых объектов
     * @type {number}
     * @memberof InoutEventsStatsGetResponse200TrackedObjectCategory
     */
    id: number;
}

export function InoutEventsStatsGetResponse200TrackedObjectCategoryFromJSON(json: any): InoutEventsStatsGetResponse200TrackedObjectCategory {
    return InoutEventsStatsGetResponse200TrackedObjectCategoryFromJSONTyped(json, false);
}

export function InoutEventsStatsGetResponse200TrackedObjectCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): InoutEventsStatsGetResponse200TrackedObjectCategory {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
    };
}

export function InoutEventsStatsGetResponse200TrackedObjectCategoryToJSON(value?: InoutEventsStatsGetResponse200TrackedObjectCategory | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
    };
}


