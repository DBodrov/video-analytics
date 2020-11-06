/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.0.local0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Сведения о пагинации данных
 * @export
 * @interface IncidentsGetResponse200Pagination
 */
export interface IncidentsGetResponse200Pagination {
    /**
     * Запрашиваемый номер страницы с данными
     * @type {number}
     * @memberof IncidentsGetResponse200Pagination
     */
    page: number;
    /**
     * Запрашиваемое количество записей на странице
     * @type {number}
     * @memberof IncidentsGetResponse200Pagination
     */
    pageSize: number;
    /**
     * Количество записей на странице
     * @type {number}
     * @memberof IncidentsGetResponse200Pagination
     */
    count: number;
}

export function IncidentsGetResponse200PaginationFromJSON(json: any): IncidentsGetResponse200Pagination {
    return IncidentsGetResponse200PaginationFromJSONTyped(json, false);
}

export function IncidentsGetResponse200PaginationFromJSONTyped(json: any, ignoreDiscriminator: boolean): IncidentsGetResponse200Pagination {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'page': json['page'],
        'pageSize': json['page_size'],
        'count': json['count'],
    };
}

export function IncidentsGetResponse200PaginationToJSON(value?: IncidentsGetResponse200Pagination | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'page': value.page,
        'page_size': value.pageSize,
        'count': value.count,
    };
}


