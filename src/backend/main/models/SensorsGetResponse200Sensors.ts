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
    SensorsGetResponse200Metrics,
    SensorsGetResponse200MetricsFromJSON,
    SensorsGetResponse200MetricsFromJSONTyped,
    SensorsGetResponse200MetricsToJSON,
    SensorsGetResponse200Ref,
    SensorsGetResponse200RefFromJSON,
    SensorsGetResponse200RefFromJSONTyped,
    SensorsGetResponse200RefToJSON,
    SensorsGetResponse200Status,
    SensorsGetResponse200StatusFromJSON,
    SensorsGetResponse200StatusFromJSONTyped,
    SensorsGetResponse200StatusToJSON,
} from './';

/**
 * Сведения о датчике
 * @export
 * @interface SensorsGetResponse200Sensors
 */
export interface SensorsGetResponse200Sensors {
    /**
     * 
     * @type {SensorsGetResponse200Ref}
     * @memberof SensorsGetResponse200Sensors
     */
    ref: SensorsGetResponse200Ref;
    /**
     * 
     * @type {SensorsGetResponse200Status}
     * @memberof SensorsGetResponse200Sensors
     */
    status: SensorsGetResponse200Status;
    /**
     * 
     * @type {SensorsGetResponse200Metrics}
     * @memberof SensorsGetResponse200Sensors
     */
    metrics: SensorsGetResponse200Metrics;
}

export function SensorsGetResponse200SensorsFromJSON(json: any): SensorsGetResponse200Sensors {
    return SensorsGetResponse200SensorsFromJSONTyped(json, false);
}

export function SensorsGetResponse200SensorsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SensorsGetResponse200Sensors {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ref': SensorsGetResponse200RefFromJSON(json['ref']),
        'status': SensorsGetResponse200StatusFromJSON(json['status']),
        'metrics': SensorsGetResponse200MetricsFromJSON(json['metrics']),
    };
}

export function SensorsGetResponse200SensorsToJSON(value?: SensorsGetResponse200Sensors | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ref': SensorsGetResponse200RefToJSON(value.ref),
        'status': SensorsGetResponse200StatusToJSON(value.status),
        'metrics': SensorsGetResponse200MetricsToJSON(value.metrics),
    };
}


