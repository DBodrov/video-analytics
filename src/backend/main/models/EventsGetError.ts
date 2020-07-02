/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.15.dev108
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Сведения об ошибке
 * @export
 * @interface EventsGetError
 */
export interface EventsGetError {
    /**
     * Контекст выполнения и значение переменных
     * @type {object}
     * @memberof EventsGetError
     */
    details: object;
    /**
     * Сообщение об ошибке
     * @type {string}
     * @memberof EventsGetError
     */
    message: string;
    /**
     * Путь к запрашиваемому ресурсу
     * @type {string}
     * @memberof EventsGetError
     */
    path: string;
    /**
     * HTTP-код ответа
     * @type {number}
     * @memberof EventsGetError
     */
    statusCode: number;
}

export function EventsGetErrorFromJSON(json: any): EventsGetError {
    return EventsGetErrorFromJSONTyped(json, false);
}

export function EventsGetErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventsGetError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'details': json['details'],
        'message': json['message'],
        'path': json['path'],
        'statusCode': json['status_code'],
    };
}

export function EventsGetErrorToJSON(value?: EventsGetError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'details': value.details,
        'message': value.message,
        'path': value.path,
        'status_code': value.statusCode,
    };
}


