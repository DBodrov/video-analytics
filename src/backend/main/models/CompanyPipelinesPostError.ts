/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.0.local0
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
 * @interface CompanyPipelinesPostError
 */
export interface CompanyPipelinesPostError {
    /**
     * Контекст выполнения и значение переменных
     * @type {object}
     * @memberof CompanyPipelinesPostError
     */
    details: object;
    /**
     * Сообщение об ошибке
     * @type {string}
     * @memberof CompanyPipelinesPostError
     */
    message: string;
    /**
     * Путь к запрашиваемому ресурсу
     * @type {string}
     * @memberof CompanyPipelinesPostError
     */
    path: string;
    /**
     * HTTP-код ответа
     * @type {number}
     * @memberof CompanyPipelinesPostError
     */
    statusCode: number;
}

export function CompanyPipelinesPostErrorFromJSON(json: any): CompanyPipelinesPostError {
    return CompanyPipelinesPostErrorFromJSONTyped(json, false);
}

export function CompanyPipelinesPostErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanyPipelinesPostError {
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

export function CompanyPipelinesPostErrorToJSON(value?: CompanyPipelinesPostError | null): any {
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


