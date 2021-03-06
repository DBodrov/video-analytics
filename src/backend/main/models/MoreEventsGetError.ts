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
 * Сведения об ошибке
 * @export
 * @interface MoreEventsGetError
 */
export interface MoreEventsGetError {
    /**
     * Контекст выполнения и значение переменных
     * @type {object}
     * @memberof MoreEventsGetError
     */
    details: object;
    /**
     * Сообщение об ошибке
     * @type {string}
     * @memberof MoreEventsGetError
     */
    message: string;
    /**
     * Путь к запрашиваемому ресурсу
     * @type {string}
     * @memberof MoreEventsGetError
     */
    path: string;
    /**
     * HTTP-код ответа
     * @type {number}
     * @memberof MoreEventsGetError
     */
    statusCode: number;
}

export function MoreEventsGetErrorFromJSON(json: any): MoreEventsGetError {
    return MoreEventsGetErrorFromJSONTyped(json, false);
}

export function MoreEventsGetErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): MoreEventsGetError {
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

export function MoreEventsGetErrorToJSON(value?: MoreEventsGetError | null): any {
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


