/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.16.dev115
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
 * @interface SensorsGetError
 */
export interface SensorsGetError {
    /**
     * Контекст выполнения и значение переменных
     * @type {object}
     * @memberof SensorsGetError
     */
    details: object;
    /**
     * Сообщение об ошибке
     * @type {string}
     * @memberof SensorsGetError
     */
    message: string;
    /**
     * Путь к запрашиваемому ресурсу
     * @type {string}
     * @memberof SensorsGetError
     */
    path: string;
    /**
     * HTTP-код ответа
     * @type {number}
     * @memberof SensorsGetError
     */
    statusCode: number;
}

export function SensorsGetErrorFromJSON(json: any): SensorsGetError {
    return SensorsGetErrorFromJSONTyped(json, false);
}

export function SensorsGetErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): SensorsGetError {
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

export function SensorsGetErrorToJSON(value?: SensorsGetError | null): any {
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


