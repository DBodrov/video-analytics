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
 * Сведения о пагинации данных
 * @export
 * @interface EventsGetResponse200Pagination
 */
export interface EventsGetResponse200Pagination {
    /**
     * null
     * @type {number}
     * @memberof EventsGetResponse200Pagination
     */
    afterEventId: number;
    /**
     * Количество записей на странице
     * @type {number}
     * @memberof EventsGetResponse200Pagination
     */
    count: number;
    /**
     * Запрашиваемый номер страницы с данными
     * @type {number}
     * @memberof EventsGetResponse200Pagination
     */
    page: number;
    /**
     * Запрашиваемое количество записей на странице
     * @type {number}
     * @memberof EventsGetResponse200Pagination
     */
    pageSize: number;
}

export function EventsGetResponse200PaginationFromJSON(json: any): EventsGetResponse200Pagination {
    return EventsGetResponse200PaginationFromJSONTyped(json, false);
}

export function EventsGetResponse200PaginationFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventsGetResponse200Pagination {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'afterEventId': json['after_event_id'],
        'count': json['count'],
        'page': json['page'],
        'pageSize': json['page_size'],
    };
}

export function EventsGetResponse200PaginationToJSON(value?: EventsGetResponse200Pagination | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'after_event_id': value.afterEventId,
        'count': value.count,
        'page': value.page,
        'page_size': value.pageSize,
    };
}


