/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.15.dev108
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ThumbnailsGetResponse200Thumbnails,
    ThumbnailsGetResponse200ThumbnailsFromJSON,
    ThumbnailsGetResponse200ThumbnailsFromJSONTyped,
    ThumbnailsGetResponse200ThumbnailsToJSON,
} from './';

/**
 * 
 * @export
 * @interface ThumbnailsGetResponse200
 */
export interface ThumbnailsGetResponse200 {
    /**
     * 
     * @type {Array<ThumbnailsGetResponse200Thumbnails>}
     * @memberof ThumbnailsGetResponse200
     */
    thumbnails: Array<ThumbnailsGetResponse200Thumbnails>;
}

export function ThumbnailsGetResponse200FromJSON(json: any): ThumbnailsGetResponse200 {
    return ThumbnailsGetResponse200FromJSONTyped(json, false);
}

export function ThumbnailsGetResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): ThumbnailsGetResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'thumbnails': ((json['thumbnails'] as Array<any>).map(ThumbnailsGetResponse200ThumbnailsFromJSON)),
    };
}

export function ThumbnailsGetResponse200ToJSON(value?: ThumbnailsGetResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'thumbnails': ((value.thumbnails as Array<any>).map(ThumbnailsGetResponse200ThumbnailsToJSON)),
    };
}

