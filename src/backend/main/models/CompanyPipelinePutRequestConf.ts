/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.17.dev126
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    PipelinesGetResponse200ConfPolygon,
    PipelinesGetResponse200ConfPolygonFromJSON,
    PipelinesGetResponse200ConfPolygonFromJSONTyped,
    PipelinesGetResponse200ConfPolygonToJSON,
} from './';

/**
 * Конфигурация конвейера
 * @export
 * @interface CompanyPipelinePutRequestConf
 */
export interface CompanyPipelinePutRequestConf {
    /**
     * Перечень идентификаторов проверок
     * @type {Array<number>}
     * @memberof CompanyPipelinePutRequestConf
     */
    checkIds: Array<number>;
    /**
     * Набор точек полигона
     * @type {Array<PipelinesGetResponse200ConfPolygon>}
     * @memberof CompanyPipelinePutRequestConf
     */
    polygon: Array<PipelinesGetResponse200ConfPolygon>;
}

export function CompanyPipelinePutRequestConfFromJSON(json: any): CompanyPipelinePutRequestConf {
    return CompanyPipelinePutRequestConfFromJSONTyped(json, false);
}

export function CompanyPipelinePutRequestConfFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanyPipelinePutRequestConf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'checkIds': json['check_ids'],
        'polygon': ((json['polygon'] as Array<any>).map(PipelinesGetResponse200ConfPolygonFromJSON)),
    };
}

export function CompanyPipelinePutRequestConfToJSON(value?: CompanyPipelinePutRequestConf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'check_ids': value.checkIds,
        'polygon': ((value.polygon as Array<any>).map(PipelinesGetResponse200ConfPolygonToJSON)),
    };
}


