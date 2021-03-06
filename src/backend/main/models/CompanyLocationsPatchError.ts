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
 * @interface CompanyLocationsPatchError
 */
export interface CompanyLocationsPatchError {
    /**
     * Контекст выполнения и значение переменных
     * @type {object}
     * @memberof CompanyLocationsPatchError
     */
    details: object;
    /**
     * Сообщение об ошибке
     * @type {string}
     * @memberof CompanyLocationsPatchError
     */
    message: string;
    /**
     * Путь к запрашиваемому ресурсу
     * @type {string}
     * @memberof CompanyLocationsPatchError
     */
    path: string;
    /**
     * HTTP-код ответа
     * @type {number}
     * @memberof CompanyLocationsPatchError
     */
    statusCode: number;
}

export function CompanyLocationsPatchErrorFromJSON(json: any): CompanyLocationsPatchError {
    return CompanyLocationsPatchErrorFromJSONTyped(json, false);
}

export function CompanyLocationsPatchErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanyLocationsPatchError {
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

export function CompanyLocationsPatchErrorToJSON(value?: CompanyLocationsPatchError | null): any {
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


