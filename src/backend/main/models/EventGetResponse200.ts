/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.19.dev161
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    EventGetResponse200Event,
    EventGetResponse200EventFromJSON,
    EventGetResponse200EventFromJSONTyped,
    EventGetResponse200EventToJSON,
} from './';

/**
 * 
 * @export
 * @interface EventGetResponse200
 */
export interface EventGetResponse200 {
    /**
     * 
     * @type {EventGetResponse200Event}
     * @memberof EventGetResponse200
     */
    event: EventGetResponse200Event;
}

export function EventGetResponse200FromJSON(json: any): EventGetResponse200 {
    return EventGetResponse200FromJSONTyped(json, false);
}

export function EventGetResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): EventGetResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'event': EventGetResponse200EventFromJSON(json['event']),
    };
}

export function EventGetResponse200ToJSON(value?: EventGetResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'event': EventGetResponse200EventToJSON(value.event),
    };
}


