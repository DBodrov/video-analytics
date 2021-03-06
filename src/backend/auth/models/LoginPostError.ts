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
 * @interface LoginPostError
 */
export interface LoginPostError {
    /**
     * Контекст выполнения и значение переменных
     * @type {object}
     * @memberof LoginPostError
     */
    details: object;
    /**
     * Сообщение об ошибке
     * @type {string}
     * @memberof LoginPostError
     */
    message: string;
    /**
     * Путь к запрашиваемому ресурсу
     * @type {string}
     * @memberof LoginPostError
     */
    path: string;
    /**
     * HTTP-код ответа
     * @type {number}
     * @memberof LoginPostError
     */
    statusCode: number;
}

export function LoginPostErrorFromJSON(json: any): LoginPostError {
    return LoginPostErrorFromJSONTyped(json, false);
}

export function LoginPostErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoginPostError {
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

export function LoginPostErrorToJSON(value?: LoginPostError | null): any {
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


