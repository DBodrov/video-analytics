/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.16.dev115
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    EventImageGetResponse200Image,
    EventImageGetResponse200ImageFromJSON,
    EventImageGetResponse200ImageFromJSONTyped,
    EventImageGetResponse200ImageToJSON,
} from './';

/**
 * 
 * @export
 * @interface EventImageGetResponse200
 */
export interface EventImageGetResponse200 {
    /**
     * 
     * @type {EventImageGetResponse200Image}
     * @memberof EventImageGetResponse200
     */
    image: EventImageGetResponse200Image;
}

export function EventImageGetResponse200FromJSON(json: any): EventImageGetResponse200 {
    return EventImageGetResponse200FromJSONTyped(json, false);
}

export function EventImageGetResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): EventImageGetResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'image': EventImageGetResponse200ImageFromJSON(json['image']),
    };
}

export function EventImageGetResponse200ToJSON(value?: EventImageGetResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'image': EventImageGetResponse200ImageToJSON(value.image),
    };
}


