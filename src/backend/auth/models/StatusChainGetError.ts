/* tslint:disable */
/* eslint-disable */
/**
 * auth
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.10.dev66
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
 * @interface StatusChainGetError
 */
export interface StatusChainGetError {
    /**
     * Контекст выполнения и значение переменных
     * @type {object}
     * @memberof StatusChainGetError
     */
    details: object;
    /**
     * Сообщение об ошибке
     * @type {string}
     * @memberof StatusChainGetError
     */
    message: string;
    /**
     * Путь к запрашиваемому ресурсу
     * @type {string}
     * @memberof StatusChainGetError
     */
    path: string;
    /**
     * HTTP-код ответа
     * @type {number}
     * @memberof StatusChainGetError
     */
    statusCode: number;
}

export function StatusChainGetErrorFromJSON(json: any): StatusChainGetError {
    return StatusChainGetErrorFromJSONTyped(json, false);
}

export function StatusChainGetErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): StatusChainGetError {
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

export function StatusChainGetErrorToJSON(value?: StatusChainGetError | null): any {
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

