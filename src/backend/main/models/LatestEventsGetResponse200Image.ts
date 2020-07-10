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
/**
 * Изображение
 * @export
 * @interface LatestEventsGetResponse200Image
 */
export interface LatestEventsGetResponse200Image {
    /**
     * Формат изображения
     * @type {string}
     * @memberof LatestEventsGetResponse200Image
     */
    compression: string;
    /**
     * Содержимое изображения в формате Base64
     * @type {string}
     * @memberof LatestEventsGetResponse200Image
     */
    content: string;
}

export function LatestEventsGetResponse200ImageFromJSON(json: any): LatestEventsGetResponse200Image {
    return LatestEventsGetResponse200ImageFromJSONTyped(json, false);
}

export function LatestEventsGetResponse200ImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): LatestEventsGetResponse200Image {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'compression': json['compression'],
        'content': json['content'],
    };
}

export function LatestEventsGetResponse200ImageToJSON(value?: LatestEventsGetResponse200Image | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'compression': value.compression,
        'content': value.content,
    };
}


