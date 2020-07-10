/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.16.dev115
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Сведения о событии
 * @export
 * @interface IncidentsGetResponse200Incidents
 */
export interface IncidentsGetResponse200Incidents {
    /**
     * Идентификатор экземпляра инцидента
     * @type {number}
     * @memberof IncidentsGetResponse200Incidents
     */
    id: number;
    /**
     * Идентификатор инцидента
     * @type {number}
     * @memberof IncidentsGetResponse200Incidents
     */
    incidentId: number;
    /**
     * Код обнаруженного транспортного средства
     * @type {string}
     * @memberof IncidentsGetResponse200Incidents
     */
    trackCode: string;
    /**
     * Код события
     * @type {string}
     * @memberof IncidentsGetResponse200Incidents
     */
    eventCode: string;
    /**
     * Дата и время совершения события в формате "YYYY-MM-DD HH:MI:SS"
     * @type {string}
     * @memberof IncidentsGetResponse200Incidents
     */
    eventTimestamp: string;
}

export function IncidentsGetResponse200IncidentsFromJSON(json: any): IncidentsGetResponse200Incidents {
    return IncidentsGetResponse200IncidentsFromJSONTyped(json, false);
}

export function IncidentsGetResponse200IncidentsFromJSONTyped(json: any, ignoreDiscriminator: boolean): IncidentsGetResponse200Incidents {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'incidentId': json['incident_id'],
        'trackCode': json['track_code'],
        'eventCode': json['event_code'],
        'eventTimestamp': json['event_timestamp'],
    };
}

export function IncidentsGetResponse200IncidentsToJSON(value?: IncidentsGetResponse200Incidents | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'incident_id': value.incidentId,
        'track_code': value.trackCode,
        'event_code': value.eventCode,
        'event_timestamp': value.eventTimestamp,
    };
}


