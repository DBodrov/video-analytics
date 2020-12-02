/* tslint:disable */
/* eslint-disable */
/**
 * auth
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.12.dev78
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    IncidentsGetResponse200Checks,
    IncidentsGetResponse200ChecksFromJSON,
    IncidentsGetResponse200ChecksFromJSONTyped,
    IncidentsGetResponse200ChecksToJSON,
} from './';

/**
 * Описание инцидента
 * @export
 * @interface IncidentsGetResponse200
 */
export interface IncidentsGetResponse200 {
    /**
     * Идентификатор инцидента
     * @type {number}
     * @memberof IncidentsGetResponse200
     */
    id: number;
    /**
     * Код инцидента
     * @type {string}
     * @memberof IncidentsGetResponse200
     */
    code: string;
    /**
     * Краткое название инцидента
     * @type {string}
     * @memberof IncidentsGetResponse200
     */
    name: string;
    /**
     * Описание инцидента
     * @type {string}
     * @memberof IncidentsGetResponse200
     */
    description: string;
    /**
     * Параметры инцидента
     * @type {object}
     * @memberof IncidentsGetResponse200
     */
    parameters: object;
    /**
     * Перечень проверок, участвующих в инциденте
     * @type {Array<IncidentsGetResponse200Checks>}
     * @memberof IncidentsGetResponse200
     */
    checks: Array<IncidentsGetResponse200Checks>;
}

export function IncidentsGetResponse200FromJSON(json: any): IncidentsGetResponse200 {
    return IncidentsGetResponse200FromJSONTyped(json, false);
}

export function IncidentsGetResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): IncidentsGetResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'code': json['code'],
        'name': json['name'],
        'description': json['description'],
        'parameters': json['parameters'],
        'checks': ((json['checks'] as Array<any>).map(IncidentsGetResponse200ChecksFromJSON)),
    };
}

export function IncidentsGetResponse200ToJSON(value?: IncidentsGetResponse200 | null): any {
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
        'parameters': value.parameters,
        'checks': ((value.checks as Array<any>).map(IncidentsGetResponse200ChecksToJSON)),
    };
}


