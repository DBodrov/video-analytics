/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.19.dev146
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
 * @interface CompanySensorGetError
 */
export interface CompanySensorGetError {
    /**
     * Контекст выполнения и значение переменных
     * @type {object}
     * @memberof CompanySensorGetError
     */
    details: object;
    /**
     * Сообщение об ошибке
     * @type {string}
     * @memberof CompanySensorGetError
     */
    message: string;
    /**
     * Путь к запрашиваемому ресурсу
     * @type {string}
     * @memberof CompanySensorGetError
     */
    path: string;
    /**
     * HTTP-код ответа
     * @type {number}
     * @memberof CompanySensorGetError
     */
    statusCode: number;
}

export function CompanySensorGetErrorFromJSON(json: any): CompanySensorGetError {
    return CompanySensorGetErrorFromJSONTyped(json, false);
}

export function CompanySensorGetErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanySensorGetError {
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

export function CompanySensorGetErrorToJSON(value?: CompanySensorGetError | null): any {
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


