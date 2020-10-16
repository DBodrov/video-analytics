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
 * @interface CompanyLocationGetError
 */
export interface CompanyLocationGetError {
    /**
     * Контекст выполнения и значение переменных
     * @type {object}
     * @memberof CompanyLocationGetError
     */
    details: object;
    /**
     * Сообщение об ошибке
     * @type {string}
     * @memberof CompanyLocationGetError
     */
    message: string;
    /**
     * Путь к запрашиваемому ресурсу
     * @type {string}
     * @memberof CompanyLocationGetError
     */
    path: string;
    /**
     * HTTP-код ответа
     * @type {number}
     * @memberof CompanyLocationGetError
     */
    statusCode: number;
}

export function CompanyLocationGetErrorFromJSON(json: any): CompanyLocationGetError {
    return CompanyLocationGetErrorFromJSONTyped(json, false);
}

export function CompanyLocationGetErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanyLocationGetError {
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

export function CompanyLocationGetErrorToJSON(value?: CompanyLocationGetError | null): any {
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

