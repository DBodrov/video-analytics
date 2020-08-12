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
/**
 * Сведения об инциденте
 * @export
 * @interface RefIncidentsGetResponse200Incidents
 */
export interface RefIncidentsGetResponse200Incidents {
    /**
     * Идентификатор инцидента
     * @type {number}
     * @memberof RefIncidentsGetResponse200Incidents
     */
    id: number;
    /**
     * Код инцидента
     * @type {string}
     * @memberof RefIncidentsGetResponse200Incidents
     */
    code: string;
    /**
     * Краткое название инцидента
     * @type {string}
     * @memberof RefIncidentsGetResponse200Incidents
     */
    name: string;
    /**
     * Описание инцидента
     * @type {string}
     * @memberof RefIncidentsGetResponse200Incidents
     */
    description: string;
    /**
     * Идентификатор компании
     * @type {number}
     * @memberof RefIncidentsGetResponse200Incidents
     */
    companyId: number;
}

export function RefIncidentsGetResponse200IncidentsFromJSON(json: any): RefIncidentsGetResponse200Incidents {
    return RefIncidentsGetResponse200IncidentsFromJSONTyped(json, false);
}

export function RefIncidentsGetResponse200IncidentsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RefIncidentsGetResponse200Incidents {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'code': json['code'],
        'name': json['name'],
        'description': json['description'],
        'companyId': json['company_id'],
    };
}

export function RefIncidentsGetResponse200IncidentsToJSON(value?: RefIncidentsGetResponse200Incidents | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'code': value.code,
        'name': value.name,
        'description': value.description,
        'company_id': value.companyId,
    };
}

