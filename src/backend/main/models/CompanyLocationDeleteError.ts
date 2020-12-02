/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.19.dev148
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
 * @interface CompanyLocationDeleteError
 */
export interface CompanyLocationDeleteError {
    /**
     * Контекст выполнения и значение переменных
     * @type {object}
     * @memberof CompanyLocationDeleteError
     */
    details: object;
    /**
     * Сообщение об ошибке
     * @type {string}
     * @memberof CompanyLocationDeleteError
     */
    message: string;
    /**
     * Путь к запрашиваемому ресурсу
     * @type {string}
     * @memberof CompanyLocationDeleteError
     */
    path: string;
    /**
     * HTTP-код ответа
     * @type {number}
     * @memberof CompanyLocationDeleteError
     */
    statusCode: number;
}

export function CompanyLocationDeleteErrorFromJSON(json: any): CompanyLocationDeleteError {
    return CompanyLocationDeleteErrorFromJSONTyped(json, false);
}

export function CompanyLocationDeleteErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanyLocationDeleteError {
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

export function CompanyLocationDeleteErrorToJSON(value?: CompanyLocationDeleteError | null): any {
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


