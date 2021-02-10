/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.19.dev161
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Сведения об отчёте
 * @export
 * @interface CompanyReportsGetResponse200Reports
 */
export interface CompanyReportsGetResponse200Reports {
    /**
     * Идентификатор отчёта
     * @type {number}
     * @memberof CompanyReportsGetResponse200Reports
     */
    id: number;
    /**
     * Код отчёта
     * @type {string}
     * @memberof CompanyReportsGetResponse200Reports
     */
    code: string;
    /**
     * Название отчёта
     * @type {string}
     * @memberof CompanyReportsGetResponse200Reports
     */
    name: string;
    /**
     * Описание отчёта
     * @type {string}
     * @memberof CompanyReportsGetResponse200Reports
     */
    description: string;
    /**
     * Набор параметров для построения отчёта
     * @type {object}
     * @memberof CompanyReportsGetResponse200Reports
     */
    _configuration: object;
}

export function CompanyReportsGetResponse200ReportsFromJSON(json: any): CompanyReportsGetResponse200Reports {
    return CompanyReportsGetResponse200ReportsFromJSONTyped(json, false);
}

export function CompanyReportsGetResponse200ReportsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanyReportsGetResponse200Reports {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'code': json['code'],
        'name': json['name'],
        'description': json['description'],
        '_configuration': json['configuration'],
    };
}

export function CompanyReportsGetResponse200ReportsToJSON(value?: CompanyReportsGetResponse200Reports | null): any {
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
        'configuration': value._configuration,
    };
}


