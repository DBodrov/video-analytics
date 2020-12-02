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
    CompanyPipelinesPostRequestConfPolygon,
    CompanyPipelinesPostRequestConfPolygonFromJSON,
    CompanyPipelinesPostRequestConfPolygonFromJSONTyped,
    CompanyPipelinesPostRequestConfPolygonToJSON,
} from './';

/**
 * Конфигурация конвейера
 * @export
 * @interface CompanyPipelinesPostRequestConf
 */
export interface CompanyPipelinesPostRequestConf {
    /**
     * Перечень идентификаторов проверок
     * @type {Array<number>}
     * @memberof CompanyPipelinesPostRequestConf
     */
    checkIds: Array<number>;
    /**
     * Набор точек полигона
     * @type {Array<CompanyPipelinesPostRequestConfPolygon>}
     * @memberof CompanyPipelinesPostRequestConf
     */
    polygon: Array<CompanyPipelinesPostRequestConfPolygon>;
}

export function CompanyPipelinesPostRequestConfFromJSON(json: any): CompanyPipelinesPostRequestConf {
    return CompanyPipelinesPostRequestConfFromJSONTyped(json, false);
}

export function CompanyPipelinesPostRequestConfFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanyPipelinesPostRequestConf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'checkIds': json['check_ids'],
        'polygon': ((json['polygon'] as Array<any>).map(CompanyPipelinesPostRequestConfPolygonFromJSON)),
    };
}

export function CompanyPipelinesPostRequestConfToJSON(value?: CompanyPipelinesPostRequestConf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'check_ids': value.checkIds,
        'polygon': ((value.polygon as Array<any>).map(CompanyPipelinesPostRequestConfPolygonToJSON)),
    };
}


