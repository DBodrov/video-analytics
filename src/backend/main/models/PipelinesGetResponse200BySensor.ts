/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.19.dev146
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    PipelineGetResponse200Detector,
    PipelineGetResponse200DetectorFromJSON,
    PipelineGetResponse200DetectorFromJSONTyped,
    PipelineGetResponse200DetectorToJSON,
    PipelineGetResponse200Tracker,
    PipelineGetResponse200TrackerFromJSON,
    PipelineGetResponse200TrackerFromJSONTyped,
    PipelineGetResponse200TrackerToJSON,
    PipelinesGetResponse200Checks,
    PipelinesGetResponse200ChecksFromJSON,
    PipelinesGetResponse200ChecksFromJSONTyped,
    PipelinesGetResponse200ChecksToJSON,
    PipelinesGetResponse200Incidents,
    PipelinesGetResponse200IncidentsFromJSON,
    PipelinesGetResponse200IncidentsFromJSONTyped,
    PipelinesGetResponse200IncidentsToJSON,
} from './';

/**
 * Описание физического конвейера
 * @export
 * @interface PipelinesGetResponse200BySensor
 */
export interface PipelinesGetResponse200BySensor {
    /**
     * Идентификатор датчика
     * @type {number}
     * @memberof PipelinesGetResponse200BySensor
     */
    id: number;
    /**
     * Набор проверок
     * @type {Array<PipelinesGetResponse200Checks>}
     * @memberof PipelinesGetResponse200BySensor
     */
    checks: Array<PipelinesGetResponse200Checks>;
    /**
     * 
     * @type {PipelineGetResponse200Detector}
     * @memberof PipelinesGetResponse200BySensor
     */
    detector: PipelineGetResponse200Detector;
    /**
     * Набор инцидентов
     * @type {Array<PipelinesGetResponse200Incidents>}
     * @memberof PipelinesGetResponse200BySensor
     */
    incidents: Array<PipelinesGetResponse200Incidents>;
    /**
     * 
     * @type {PipelineGetResponse200Tracker}
     * @memberof PipelinesGetResponse200BySensor
     */
    tracker: PipelineGetResponse200Tracker;
}

export function PipelinesGetResponse200BySensorFromJSON(json: any): PipelinesGetResponse200BySensor {
    return PipelinesGetResponse200BySensorFromJSONTyped(json, false);
}

export function PipelinesGetResponse200BySensorFromJSONTyped(json: any, ignoreDiscriminator: boolean): PipelinesGetResponse200BySensor {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'checks': ((json['checks'] as Array<any>).map(PipelinesGetResponse200ChecksFromJSON)),
        'detector': PipelineGetResponse200DetectorFromJSON(json['detector']),
        'incidents': ((json['incidents'] as Array<any>).map(PipelinesGetResponse200IncidentsFromJSON)),
        'tracker': PipelineGetResponse200TrackerFromJSON(json['tracker']),
    };
}

export function PipelinesGetResponse200BySensorToJSON(value?: PipelinesGetResponse200BySensor | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'checks': ((value.checks as Array<any>).map(PipelinesGetResponse200ChecksToJSON)),
        'detector': PipelineGetResponse200DetectorToJSON(value.detector),
        'incidents': ((value.incidents as Array<any>).map(PipelinesGetResponse200IncidentsToJSON)),
        'tracker': PipelineGetResponse200TrackerToJSON(value.tracker),
    };
}


