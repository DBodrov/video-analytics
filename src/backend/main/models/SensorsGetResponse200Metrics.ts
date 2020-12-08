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
/**
 * Метрики датчика
 * @export
 * @interface SensorsGetResponse200Metrics
 */
export interface SensorsGetResponse200Metrics {
    /**
     * Список идентификаторов активных шаблонов
     * @type {Array<number>}
     * @memberof SensorsGetResponse200Metrics
     */
    activeCheckCategoryIds?: Array<number>;
    /**
     * Список идентификаторов активных правил
     * @type {Array<number>}
     * @memberof SensorsGetResponse200Metrics
     */
    activeCheckIds?: Array<number>;
    /**
     * Список идентификаторов активных инцидентов
     * @type {Array<number>}
     * @memberof SensorsGetResponse200Metrics
     */
    activeIncidentIds?: Array<number>;
    /**
     * Список идентификаторов неактивных правил
     * @type {Array<number>}
     * @memberof SensorsGetResponse200Metrics
     */
    inactiveCheckIds?: Array<number>;
    /**
     * Список идентификаторов неактивных инцидентов
     * @type {Array<number>}
     * @memberof SensorsGetResponse200Metrics
     */
    inactiveIncidentIds?: Array<number>;
}

export function SensorsGetResponse200MetricsFromJSON(json: any): SensorsGetResponse200Metrics {
    return SensorsGetResponse200MetricsFromJSONTyped(json, false);
}

export function SensorsGetResponse200MetricsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SensorsGetResponse200Metrics {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'activeCheckCategoryIds': !exists(json, 'active_check_category_ids') ? undefined : json['active_check_category_ids'],
        'activeCheckIds': !exists(json, 'active_check_ids') ? undefined : json['active_check_ids'],
        'activeIncidentIds': !exists(json, 'active_incident_ids') ? undefined : json['active_incident_ids'],
        'inactiveCheckIds': !exists(json, 'inactive_check_ids') ? undefined : json['inactive_check_ids'],
        'inactiveIncidentIds': !exists(json, 'inactive_incident_ids') ? undefined : json['inactive_incident_ids'],
    };
}

export function SensorsGetResponse200MetricsToJSON(value?: SensorsGetResponse200Metrics | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'active_check_category_ids': value.activeCheckCategoryIds,
        'active_check_ids': value.activeCheckIds,
        'active_incident_ids': value.activeIncidentIds,
        'inactive_check_ids': value.inactiveCheckIds,
        'inactive_incident_ids': value.inactiveIncidentIds,
    };
}


