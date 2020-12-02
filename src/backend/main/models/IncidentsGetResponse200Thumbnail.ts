/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.19.dev148
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    EventsGetResponse200ImageTrackBoxes,
    EventsGetResponse200ImageTrackBoxesFromJSON,
    EventsGetResponse200ImageTrackBoxesFromJSONTyped,
    EventsGetResponse200ImageTrackBoxesToJSON,
} from './';

/**
 * Превью изображения по инциденту
 * @export
 * @interface IncidentsGetResponse200Thumbnail
 */
export interface IncidentsGetResponse200Thumbnail {
    /**
     * Идентификатор категории изображения
     * @type {number}
     * @memberof IncidentsGetResponse200Thumbnail
     */
    categoryId: number;
    /**
     * Формат изображения
     * @type {string}
     * @memberof IncidentsGetResponse200Thumbnail
     */
    compression: string;
    /**
     * Содержимое изображения в формате Base64
     * @type {string}
     * @memberof IncidentsGetResponse200Thumbnail
     */
    content: string;
    /**
     * Высота изображения
     * @type {number}
     * @memberof IncidentsGetResponse200Thumbnail
     */
    height: number;
    /**
     * Идентификатор превью изображения
     * @type {number}
     * @memberof IncidentsGetResponse200Thumbnail
     */
    id: number;
    /**
     * Идентификатор изображения
     * @type {number}
     * @memberof IncidentsGetResponse200Thumbnail
     */
    imageId: number;
    /**
     * Разметка обнаруженных объектов
     * @type {Array<EventsGetResponse200ImageTrackBoxes>}
     * @memberof IncidentsGetResponse200Thumbnail
     */
    trackBoxes?: Array<EventsGetResponse200ImageTrackBoxes>;
    /**
     * Ширина изображения
     * @type {number}
     * @memberof IncidentsGetResponse200Thumbnail
     */
    width: number;
}

export function IncidentsGetResponse200ThumbnailFromJSON(json: any): IncidentsGetResponse200Thumbnail {
    return IncidentsGetResponse200ThumbnailFromJSONTyped(json, false);
}

export function IncidentsGetResponse200ThumbnailFromJSONTyped(json: any, ignoreDiscriminator: boolean): IncidentsGetResponse200Thumbnail {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'categoryId': json['category_id'],
        'compression': json['compression'],
        'content': json['content'],
        'height': json['height'],
        'id': json['id'],
        'imageId': json['image_id'],
        'trackBoxes': !exists(json, 'track_boxes') ? undefined : ((json['track_boxes'] as Array<any>).map(EventsGetResponse200ImageTrackBoxesFromJSON)),
        'width': json['width'],
    };
}

export function IncidentsGetResponse200ThumbnailToJSON(value?: IncidentsGetResponse200Thumbnail | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'category_id': value.categoryId,
        'compression': value.compression,
        'content': value.content,
        'height': value.height,
        'id': value.id,
        'image_id': value.imageId,
        'track_boxes': value.trackBoxes === undefined ? undefined : ((value.trackBoxes as Array<any>).map(EventsGetResponse200ImageTrackBoxesToJSON)),
        'width': value.width,
    };
}


