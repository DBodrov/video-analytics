/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.18.dev141
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
 * @interface EventStatusPostError
 */
export interface EventStatusPostError {
    /**
     * Контекст выполнения и значение переменных
     * @type {object}
     * @memberof EventStatusPostError
     */
    details: object;
    /**
     * Сообщение об ошибке
     * @type {string}
     * @memberof EventStatusPostError
     */
    message: string;
    /**
     * Путь к запрашиваемому ресурсу
     * @type {string}
     * @memberof EventStatusPostError
     */
    path: string;
    /**
     * HTTP-код ответа
     * @type {number}
     * @memberof EventStatusPostError
     */
    statusCode: number;
}

export function EventStatusPostErrorFromJSON(json: any): EventStatusPostError {
    return EventStatusPostErrorFromJSONTyped(json, false);
}

export function EventStatusPostErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventStatusPostError {
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

export function EventStatusPostErrorToJSON(value?: EventStatusPostError | null): any {
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


