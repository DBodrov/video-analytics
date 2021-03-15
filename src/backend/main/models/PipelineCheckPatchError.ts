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
 * @interface PipelineCheckPatchError
 */
export interface PipelineCheckPatchError {
    /**
     * Контекст выполнения и значение переменных
     * @type {object}
     * @memberof PipelineCheckPatchError
     */
    details: object;
    /**
     * Сообщение об ошибке
     * @type {string}
     * @memberof PipelineCheckPatchError
     */
    message: string;
    /**
     * Путь к запрашиваемому ресурсу
     * @type {string}
     * @memberof PipelineCheckPatchError
     */
    path: string;
    /**
     * HTTP-код ответа
     * @type {number}
     * @memberof PipelineCheckPatchError
     */
    statusCode: number;
}

export function PipelineCheckPatchErrorFromJSON(json: any): PipelineCheckPatchError {
    return PipelineCheckPatchErrorFromJSONTyped(json, false);
}

export function PipelineCheckPatchErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): PipelineCheckPatchError {
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

export function PipelineCheckPatchErrorToJSON(value?: PipelineCheckPatchError | null): any {
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


