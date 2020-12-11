/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.19.dev156
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
 * @interface CompanySensorDeleteError
 */
export interface CompanySensorDeleteError {
    /**
     * Контекст выполнения и значение переменных
     * @type {object}
     * @memberof CompanySensorDeleteError
     */
    details: object;
    /**
     * Сообщение об ошибке
     * @type {string}
     * @memberof CompanySensorDeleteError
     */
    message: string;
    /**
     * Путь к запрашиваемому ресурсу
     * @type {string}
     * @memberof CompanySensorDeleteError
     */
    path: string;
    /**
     * HTTP-код ответа
     * @type {number}
     * @memberof CompanySensorDeleteError
     */
    statusCode: number;
}

export function CompanySensorDeleteErrorFromJSON(json: any): CompanySensorDeleteError {
    return CompanySensorDeleteErrorFromJSONTyped(json, false);
}

export function CompanySensorDeleteErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanySensorDeleteError {
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

export function CompanySensorDeleteErrorToJSON(value?: CompanySensorDeleteError | null): any {
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


