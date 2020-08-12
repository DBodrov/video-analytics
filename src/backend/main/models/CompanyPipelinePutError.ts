/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.17.dev126
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
 * @interface CompanyPipelinePutError
 */
export interface CompanyPipelinePutError {
    /**
     * Контекст выполнения и значение переменных
     * @type {object}
     * @memberof CompanyPipelinePutError
     */
    details: object;
    /**
     * Сообщение об ошибке
     * @type {string}
     * @memberof CompanyPipelinePutError
     */
    message: string;
    /**
     * Путь к запрашиваемому ресурсу
     * @type {string}
     * @memberof CompanyPipelinePutError
     */
    path: string;
    /**
     * HTTP-код ответа
     * @type {number}
     * @memberof CompanyPipelinePutError
     */
    statusCode: number;
}

export function CompanyPipelinePutErrorFromJSON(json: any): CompanyPipelinePutError {
    return CompanyPipelinePutErrorFromJSONTyped(json, false);
}

export function CompanyPipelinePutErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanyPipelinePutError {
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

export function CompanyPipelinePutErrorToJSON(value?: CompanyPipelinePutError | null): any {
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

