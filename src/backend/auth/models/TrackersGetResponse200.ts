/* tslint:disable */
/* eslint-disable */
/**
 * auth
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.12.dev78
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Описание трекера
 * @export
 * @interface TrackersGetResponse200
 */
export interface TrackersGetResponse200 {
    /**
     * Идентификатор трекера
     * @type {number}
     * @memberof TrackersGetResponse200
     */
    id: number;
    /**
     * Код трекера
     * @type {string}
     * @memberof TrackersGetResponse200
     */
    code: string;
    /**
     * Краткое название трекера
     * @type {string}
     * @memberof TrackersGetResponse200
     */
    name: string;
    /**
     * Описание трекера
     * @type {string}
     * @memberof TrackersGetResponse200
     */
    description: string;
}

export function TrackersGetResponse200FromJSON(json: any): TrackersGetResponse200 {
    return TrackersGetResponse200FromJSONTyped(json, false);
}

export function TrackersGetResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackersGetResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'code': json['code'],
        'name': json['name'],
        'description': json['description'],
    };
}

export function TrackersGetResponse200ToJSON(value?: TrackersGetResponse200 | null): any {
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
    };
}


