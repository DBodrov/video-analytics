/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.14.dev96
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
 * @interface InoutLatestEventsGetResponse200Image
 */
export interface InoutLatestEventsGetResponse200Image {
    /**
     * Формат изображения
     * @type {string}
     * @memberof InoutLatestEventsGetResponse200Image
     */
    compression: string;
    /**
     * Содержимое изображения в формате Base64
     * @type {string}
     * @memberof InoutLatestEventsGetResponse200Image
     */
    content: string;
}

export function InoutLatestEventsGetResponse200ImageFromJSON(json: any): InoutLatestEventsGetResponse200Image {
    return InoutLatestEventsGetResponse200ImageFromJSONTyped(json, false);
}

export function InoutLatestEventsGetResponse200ImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): InoutLatestEventsGetResponse200Image {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'compression': json['compression'],
        'content': json['content'],
    };
}

export function InoutLatestEventsGetResponse200ImageToJSON(value?: InoutLatestEventsGetResponse200Image | null): any {
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


