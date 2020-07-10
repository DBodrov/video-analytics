/* tslint:disable */
/* eslint-disable */
/**
 * auth
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.9.dev57
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
 * @interface CompaniesGetError
 */
export interface CompaniesGetError {
    /**
     * Контекст выполнения и значение переменных
     * @type {object}
     * @memberof CompaniesGetError
     */
    details: object;
    /**
     * Сообщение об ошибке
     * @type {string}
     * @memberof CompaniesGetError
     */
    message: string;
    /**
     * Путь к запрашиваемому ресурсу
     * @type {string}
     * @memberof CompaniesGetError
     */
    path: string;
    /**
     * HTTP-код ответа
     * @type {number}
     * @memberof CompaniesGetError
     */
    statusCode: number;
}

export function CompaniesGetErrorFromJSON(json: any): CompaniesGetError {
    return CompaniesGetErrorFromJSONTyped(json, false);
}

export function CompaniesGetErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompaniesGetError {
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

export function CompaniesGetErrorToJSON(value?: CompaniesGetError | null): any {
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


