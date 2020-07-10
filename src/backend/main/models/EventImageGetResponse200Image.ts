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
 * Сведения об изображении
 * @export
 * @interface EventImageGetResponse200Image
 */
export interface EventImageGetResponse200Image {
    /**
     * Идентификатор изображения
     * @type {number}
     * @memberof EventImageGetResponse200Image
     */
    id: number;
    /**
     * Формат изображения
     * @type {string}
     * @memberof EventImageGetResponse200Image
     */
    compression: string;
    /**
     * Содержимое изображения в формате Base64
     * @type {string}
     * @memberof EventImageGetResponse200Image
     */
    content: string;
}

export function EventImageGetResponse200ImageFromJSON(json: any): EventImageGetResponse200Image {
    return EventImageGetResponse200ImageFromJSONTyped(json, false);
}

export function EventImageGetResponse200ImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventImageGetResponse200Image {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'compression': json['compression'],
        'content': json['content'],
    };
}

export function EventImageGetResponse200ImageToJSON(value?: EventImageGetResponse200Image | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'compression': value.compression,
        'content': value.content,
    };
}


