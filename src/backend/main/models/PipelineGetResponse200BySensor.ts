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
    PipelineGetResponse200Checks,
    PipelineGetResponse200ChecksFromJSON,
    PipelineGetResponse200ChecksFromJSONTyped,
    PipelineGetResponse200ChecksToJSON,
    PipelineGetResponse200Detector,
    PipelineGetResponse200DetectorFromJSON,
    PipelineGetResponse200DetectorFromJSONTyped,
    PipelineGetResponse200DetectorToJSON,
    PipelineGetResponse200Incidents,
    PipelineGetResponse200IncidentsFromJSON,
    PipelineGetResponse200IncidentsFromJSONTyped,
    PipelineGetResponse200IncidentsToJSON,
    PipelineGetResponse200Tracker,
    PipelineGetResponse200TrackerFromJSON,
    PipelineGetResponse200TrackerFromJSONTyped,
    PipelineGetResponse200TrackerToJSON,
} from './';

/**
 * Описание физического конвейера
 * @export
 * @interface PipelineGetResponse200BySensor
 */
export interface PipelineGetResponse200BySensor {
    /**
     * Идентификатор датчика
     * @type {number}
     * @memberof PipelineGetResponse200BySensor
     */
    id: number;
    /**
     * Набор проверок
     * @type {Array<PipelineGetResponse200Checks>}
     * @memberof PipelineGetResponse200BySensor
     */
    checks: Array<PipelineGetResponse200Checks>;
    /**
     * 
     * @type {PipelineGetResponse200Detector}
     * @memberof PipelineGetResponse200BySensor
     */
    detector: PipelineGetResponse200Detector;
    /**
     * Набор инцидентов
     * @type {Array<PipelineGetResponse200Incidents>}
     * @memberof PipelineGetResponse200BySensor
     */
    incidents: Array<PipelineGetResponse200Incidents>;
    /**
     * 
     * @type {PipelineGetResponse200Tracker}
     * @memberof PipelineGetResponse200BySensor
     */
    tracker: PipelineGetResponse200Tracker;
}

export function PipelineGetResponse200BySensorFromJSON(json: any): PipelineGetResponse200BySensor {
    return PipelineGetResponse200BySensorFromJSONTyped(json, false);
}

export function PipelineGetResponse200BySensorFromJSONTyped(json: any, ignoreDiscriminator: boolean): PipelineGetResponse200BySensor {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'checks': ((json['checks'] as Array<any>).map(PipelineGetResponse200ChecksFromJSON)),
        'detector': PipelineGetResponse200DetectorFromJSON(json['detector']),
        'incidents': ((json['incidents'] as Array<any>).map(PipelineGetResponse200IncidentsFromJSON)),
        'tracker': PipelineGetResponse200TrackerFromJSON(json['tracker']),
    };
}

export function PipelineGetResponse200BySensorToJSON(value?: PipelineGetResponse200BySensor | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'checks': ((value.checks as Array<any>).map(PipelineGetResponse200ChecksToJSON)),
        'detector': PipelineGetResponse200DetectorToJSON(value.detector),
        'incidents': ((value.incidents as Array<any>).map(PipelineGetResponse200IncidentsToJSON)),
        'tracker': PipelineGetResponse200TrackerToJSON(value.tracker),
    };
}


