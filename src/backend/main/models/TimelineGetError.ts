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
 * Сведения об ошибке
 * @export
 * @interface TimelineGetError
 */
export interface TimelineGetError {
    /**
     * Контекст выполнения и значение переменных
     * @type {object}
     * @memberof TimelineGetError
     */
    details: object;
    /**
     * Сообщение об ошибке
     * @type {string}
     * @memberof TimelineGetError
     */
    message: string;
    /**
     * Путь к запрашиваемому ресурсу
     * @type {string}
     * @memberof TimelineGetError
     */
    path: string;
    /**
     * HTTP-код ответа
     * @type {number}
     * @memberof TimelineGetError
     */
    statusCode: number;
}

export function TimelineGetErrorFromJSON(json: any): TimelineGetError {
    return TimelineGetErrorFromJSONTyped(json, false);
}

export function TimelineGetErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimelineGetError {
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

export function TimelineGetErrorToJSON(value?: TimelineGetError | null): any {
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

