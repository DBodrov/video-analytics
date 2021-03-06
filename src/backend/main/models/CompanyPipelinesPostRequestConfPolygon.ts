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
/**
 * Координаты точки
 * @export
 * @interface CompanyPipelinesPostRequestConfPolygon
 */
export interface CompanyPipelinesPostRequestConfPolygon {
    /**
     * Координата точки на оси X
     * @type {number}
     * @memberof CompanyPipelinesPostRequestConfPolygon
     */
    x: number;
    /**
     * Координата точки на оси Y
     * @type {number}
     * @memberof CompanyPipelinesPostRequestConfPolygon
     */
    y: number;
    /**
     * Порядковый номер точки
     * @type {number}
     * @memberof CompanyPipelinesPostRequestConfPolygon
     */
    sequence: number;
}

export function CompanyPipelinesPostRequestConfPolygonFromJSON(json: any): CompanyPipelinesPostRequestConfPolygon {
    return CompanyPipelinesPostRequestConfPolygonFromJSONTyped(json, false);
}

export function CompanyPipelinesPostRequestConfPolygonFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanyPipelinesPostRequestConfPolygon {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'x': json['x'],
        'y': json['y'],
        'sequence': json['sequence'],
    };
}

export function CompanyPipelinesPostRequestConfPolygonToJSON(value?: CompanyPipelinesPostRequestConfPolygon | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'x': value.x,
        'y': value.y,
        'sequence': value.sequence,
    };
}


