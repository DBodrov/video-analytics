/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.19.dev156
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    PipelineGetResponse200BySensor,
    PipelineGetResponse200BySensorFromJSON,
    PipelineGetResponse200BySensorFromJSONTyped,
    PipelineGetResponse200BySensorToJSON,
} from './';

/**
 * Сведения о конвейере
 * @export
 * @interface PipelineGetResponse200
 */
export interface PipelineGetResponse200 {
    /**
     * Идентификатор конвейера
     * @type {number}
     * @memberof PipelineGetResponse200
     */
    id: number;
    /**
     * Идентификатор компании
     * @type {number}
     * @memberof PipelineGetResponse200
     */
    companyId: number;
    /**
     * Параметры деплоя конвейера
     * @type {object}
     * @memberof PipelineGetResponse200
     */
    deploy: object;
    /**
     * Перечень физических конвейеров
     * @type {Array<PipelineGetResponse200BySensor>}
     * @memberof PipelineGetResponse200
     */
    bySensor: Array<PipelineGetResponse200BySensor>;
}

export function PipelineGetResponse200FromJSON(json: any): PipelineGetResponse200 {
    return PipelineGetResponse200FromJSONTyped(json, false);
}

export function PipelineGetResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): PipelineGetResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'companyId': json['company_id'],
        'deploy': json['deploy'],
        'bySensor': ((json['by_sensor'] as Array<any>).map(PipelineGetResponse200BySensorFromJSON)),
    };
}

export function PipelineGetResponse200ToJSON(value?: PipelineGetResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'company_id': value.companyId,
        'deploy': value.deploy,
        'by_sensor': ((value.bySensor as Array<any>).map(PipelineGetResponse200BySensorToJSON)),
    };
}


