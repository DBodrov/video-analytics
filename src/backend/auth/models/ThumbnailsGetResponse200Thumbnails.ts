/* tslint:disable */
/* eslint-disable */
/**
 * auth
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.13.dev86
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Сведения о форматах
 * @export
 * @interface ThumbnailsGetResponse200Thumbnails
 */
export interface ThumbnailsGetResponse200Thumbnails {
    /**
     * Идентификатор формата
     * @type {number}
     * @memberof ThumbnailsGetResponse200Thumbnails
     */
    id: number;
    /**
     * Код формата
     * @type {string}
     * @memberof ThumbnailsGetResponse200Thumbnails
     */
    code: string;
    /**
     * Краткое название формата
     * @type {string}
     * @memberof ThumbnailsGetResponse200Thumbnails
     */
    name: string;
    /**
     * Описание формата
     * @type {string}
     * @memberof ThumbnailsGetResponse200Thumbnails
     */
    description: string;
    /**
     * Максимальная ширина изображения
     * @type {number}
     * @memberof ThumbnailsGetResponse200Thumbnails
     */
    width: number;
    /**
     * Максимальная высота изображения
     * @type {number}
     * @memberof ThumbnailsGetResponse200Thumbnails
     */
    height: number;
}

export function ThumbnailsGetResponse200ThumbnailsFromJSON(json: any): ThumbnailsGetResponse200Thumbnails {
    return ThumbnailsGetResponse200ThumbnailsFromJSONTyped(json, false);
}

export function ThumbnailsGetResponse200ThumbnailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThumbnailsGetResponse200Thumbnails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'code': json['code'],
        'name': json['name'],
        'description': json['description'],
        'width': json['width'],
        'height': json['height'],
    };
}

export function ThumbnailsGetResponse200ThumbnailsToJSON(value?: ThumbnailsGetResponse200Thumbnails | null): any {
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
        'width': value.width,
        'height': value.height,
    };
}


