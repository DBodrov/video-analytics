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
import {
    CompanyReportsGetResponse200Reports,
    CompanyReportsGetResponse200ReportsFromJSON,
    CompanyReportsGetResponse200ReportsFromJSONTyped,
    CompanyReportsGetResponse200ReportsToJSON,
} from './';

/**
 * 
 * @export
 * @interface CompanyReportsGetResponse200
 */
export interface CompanyReportsGetResponse200 {
    /**
     * 
     * @type {Array<CompanyReportsGetResponse200Reports>}
     * @memberof CompanyReportsGetResponse200
     */
    reports: Array<CompanyReportsGetResponse200Reports>;
}

export function CompanyReportsGetResponse200FromJSON(json: any): CompanyReportsGetResponse200 {
    return CompanyReportsGetResponse200FromJSONTyped(json, false);
}

export function CompanyReportsGetResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanyReportsGetResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'reports': ((json['reports'] as Array<any>).map(CompanyReportsGetResponse200ReportsFromJSON)),
    };
}

export function CompanyReportsGetResponse200ToJSON(value?: CompanyReportsGetResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'reports': ((value.reports as Array<any>).map(CompanyReportsGetResponse200ReportsToJSON)),
    };
}


