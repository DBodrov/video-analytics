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
    IncidentGetResponse200IncidentImageTrackBoxes,
    IncidentGetResponse200IncidentImageTrackBoxesFromJSON,
    IncidentGetResponse200IncidentImageTrackBoxesFromJSONTyped,
    IncidentGetResponse200IncidentImageTrackBoxesToJSON,
} from './';

/**
 * Превью изображения по инциденту
 * @export
 * @interface IncidentGetResponse200IncidentThumbnail
 */
export interface IncidentGetResponse200IncidentThumbnail {
    /**
     * Идентификатор категории изображения
     * @type {number}
     * @memberof IncidentGetResponse200IncidentThumbnail
     */
    categoryId: number;
    /**
     * Формат изображения
     * @type {string}
     * @memberof IncidentGetResponse200IncidentThumbnail
     */
    compression: string;
    /**
     * Содержимое изображения в формате Base64
     * @type {string}
     * @memberof IncidentGetResponse200IncidentThumbnail
     */
    content: string;
    /**
     * Высота изображения
     * @type {number}
     * @memberof IncidentGetResponse200IncidentThumbnail
     */
    height: number;
    /**
     * Идентификатор превью изображения
     * @type {number}
     * @memberof IncidentGetResponse200IncidentThumbnail
     */
    id: number;
    /**
     * Идентификатор изображения
     * @type {number}
     * @memberof IncidentGetResponse200IncidentThumbnail
     */
    imageId: number;
    /**
     * Разметка обнаруженных объектов
     * @type {Array<IncidentGetResponse200IncidentImageTrackBoxes>}
     * @memberof IncidentGetResponse200IncidentThumbnail
     */
    trackBoxes?: Array<IncidentGetResponse200IncidentImageTrackBoxes>;
    /**
     * Ширина изображения
     * @type {number}
     * @memberof IncidentGetResponse200IncidentThumbnail
     */
    width: number;
}

export function IncidentGetResponse200IncidentThumbnailFromJSON(json: any): IncidentGetResponse200IncidentThumbnail {
    return IncidentGetResponse200IncidentThumbnailFromJSONTyped(json, false);
}

export function IncidentGetResponse200IncidentThumbnailFromJSONTyped(json: any, ignoreDiscriminator: boolean): IncidentGetResponse200IncidentThumbnail {
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
        'trackBoxes': !exists(json, 'track_boxes') ? undefined : ((json['track_boxes'] as Array<any>).map(IncidentGetResponse200IncidentImageTrackBoxesFromJSON)),
        'width': json['width'],
    };
}

export function IncidentGetResponse200IncidentThumbnailToJSON(value?: IncidentGetResponse200IncidentThumbnail | null): any {
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
        'track_boxes': value.trackBoxes === undefined ? undefined : ((value.trackBoxes as Array<any>).map(IncidentGetResponse200IncidentImageTrackBoxesToJSON)),
        'width': value.width,
    };
}


