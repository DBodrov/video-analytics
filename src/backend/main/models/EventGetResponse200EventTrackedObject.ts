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
import {
    EventGetResponse200EventTrackedObjectExtra,
    EventGetResponse200EventTrackedObjectExtraFromJSON,
    EventGetResponse200EventTrackedObjectExtraFromJSONTyped,
    EventGetResponse200EventTrackedObjectExtraToJSON,
} from './';

/**
 * Сведения об обнаруженном объекте
 * @export
 * @interface EventGetResponse200EventTrackedObject
 */
export interface EventGetResponse200EventTrackedObject {
    /**
     * Идентификатор транспортного средства
     * @type {number}
     * @memberof EventGetResponse200EventTrackedObject
     */
    id: number;
    /**
     * Код транспортного средства
     * @type {string}
     * @memberof EventGetResponse200EventTrackedObject
     */
    code: string;
    /**
     * Перечень дополнительных атрибутов по обнаруженному объекту
     * @type {Array<EventGetResponse200EventTrackedObjectExtra>}
     * @memberof EventGetResponse200EventTrackedObject
     */
    extra: Array<EventGetResponse200EventTrackedObjectExtra>;
}

export function EventGetResponse200EventTrackedObjectFromJSON(json: any): EventGetResponse200EventTrackedObject {
    return EventGetResponse200EventTrackedObjectFromJSONTyped(json, false);
}

export function EventGetResponse200EventTrackedObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventGetResponse200EventTrackedObject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'code': json['code'],
        'extra': ((json['extra'] as Array<any>).map(EventGetResponse200EventTrackedObjectExtraFromJSON)),
    };
}

export function EventGetResponse200EventTrackedObjectToJSON(value?: EventGetResponse200EventTrackedObject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'code': value.code,
        'extra': ((value.extra as Array<any>).map(EventGetResponse200EventTrackedObjectExtraToJSON)),
    };
}


