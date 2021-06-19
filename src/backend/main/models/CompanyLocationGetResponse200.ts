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
/**
 * Сведения о площадке
 * @export
 * @interface CompanyLocationGetResponse200
 */
export interface CompanyLocationGetResponse200 {
    /**
     * Идентификатор площадки
     * @type {number}
     * @memberof CompanyLocationGetResponse200
     */
    id: number;
    /**
     * Код площадки
     * @type {string}
     * @memberof CompanyLocationGetResponse200
     */
    code: string;
    /**
     * Краткое название площадки
     * @type {string}
     * @memberof CompanyLocationGetResponse200
     */
    name: string;
    /**
     * Описание площадки
     * @type {string}
     * @memberof CompanyLocationGetResponse200
     */
    description: string;
    /**
     * Идентификатор компании
     * @type {number}
     * @memberof CompanyLocationGetResponse200
     */
    companyId: number;
}

export function CompanyLocationGetResponse200FromJSON(json: any): CompanyLocationGetResponse200 {
    return CompanyLocationGetResponse200FromJSONTyped(json, false);
}

export function CompanyLocationGetResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanyLocationGetResponse200 {
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

export function CompanyLocationGetResponse200ToJSON(value?: CompanyLocationGetResponse200 | null): any {
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

