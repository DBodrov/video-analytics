/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.19.dev155
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    SensorsGetResponse200Sensors,
    SensorsGetResponse200SensorsFromJSON,
    SensorsGetResponse200SensorsFromJSONTyped,
    SensorsGetResponse200SensorsToJSON,
} from './';

/**
 * 
 * @export
 * @interface SensorsGetResponse200
 */
export interface SensorsGetResponse200 {
    /**
     * 
     * @type {Array<SensorsGetResponse200Sensors>}
     * @memberof SensorsGetResponse200
     */
    sensors: Array<SensorsGetResponse200Sensors>;
}

export function SensorsGetResponse200FromJSON(json: any): SensorsGetResponse200 {
    return SensorsGetResponse200FromJSONTyped(json, false);
}

export function SensorsGetResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): SensorsGetResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sensors': ((json['sensors'] as Array<any>).map(SensorsGetResponse200SensorsFromJSON)),
    };
}

export function SensorsGetResponse200ToJSON(value?: SensorsGetResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sensors': ((value.sensors as Array<any>).map(SensorsGetResponse200SensorsToJSON)),
    };
}


