/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.19.dev160
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Дополнительная информация
 * @export
 * @interface IncidentGetResponse200IncidentTrackedObjectExtra
 */
export interface IncidentGetResponse200IncidentTrackedObjectExtra {
    /**
     * Код атрибута
     * @type {string}
     * @memberof IncidentGetResponse200IncidentTrackedObjectExtra
     */
    code: string;
    /**
     * Порядковый номер при отображении на портале
     * @type {number}
     * @memberof IncidentGetResponse200IncidentTrackedObjectExtra
     */
    displayOrder: number;
    /**
     * Идентификатор атрибута
     * @type {number}
     * @memberof IncidentGetResponse200IncidentTrackedObjectExtra
     */
    id: number;
    /**
     * Название атрибута
     * @type {string}
     * @memberof IncidentGetResponse200IncidentTrackedObjectExtra
     */
    name: string;
    /**
     * Значение атрибута
     * @type {string}
     * @memberof IncidentGetResponse200IncidentTrackedObjectExtra
     */
    value: string;
}

export function IncidentGetResponse200IncidentTrackedObjectExtraFromJSON(json: any): IncidentGetResponse200IncidentTrackedObjectExtra {
    return IncidentGetResponse200IncidentTrackedObjectExtraFromJSONTyped(json, false);
}

export function IncidentGetResponse200IncidentTrackedObjectExtraFromJSONTyped(json: any, ignoreDiscriminator: boolean): IncidentGetResponse200IncidentTrackedObjectExtra {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'displayOrder': json['display_order'],
        'id': json['id'],
        'name': json['name'],
        'value': json['value'],
    };
}

export function IncidentGetResponse200IncidentTrackedObjectExtraToJSON(value?: IncidentGetResponse200IncidentTrackedObjectExtra | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'display_order': value.displayOrder,
        'id': value.id,
        'name': value.name,
        'value': value.value,
    };
}

