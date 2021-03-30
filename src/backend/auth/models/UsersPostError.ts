/* tslint:disable */
/* eslint-disable */
/**
 * auth
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.13.dev86
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
 * @interface UsersPostError
 */
export interface UsersPostError {
    /**
     * Контекст выполнения и значение переменных
     * @type {object}
     * @memberof UsersPostError
     */
    details: object;
    /**
     * Сообщение об ошибке
     * @type {string}
     * @memberof UsersPostError
     */
    message: string;
    /**
     * Путь к запрашиваемому ресурсу
     * @type {string}
     * @memberof UsersPostError
     */
    path: string;
    /**
     * HTTP-код ответа
     * @type {number}
     * @memberof UsersPostError
     */
    statusCode: number;
}

export function UsersPostErrorFromJSON(json: any): UsersPostError {
    return UsersPostErrorFromJSONTyped(json, false);
}

export function UsersPostErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsersPostError {
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

export function UsersPostErrorToJSON(value?: UsersPostError | null): any {
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


