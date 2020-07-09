/* tslint:disable */
/* eslint-disable */
/**
 * auth
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.9.dev54
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface LoginPostRequest
 */
export interface LoginPostRequest {
    /**
     * Учетная запись пользователя
     * @type {string}
     * @memberof LoginPostRequest
     */
    userName: string;
    /**
     * Пароль пользователя
     * @type {string}
     * @memberof LoginPostRequest
     */
    password: string;
}

export function LoginPostRequestFromJSON(json: any): LoginPostRequest {
    return LoginPostRequestFromJSONTyped(json, false);
}

export function LoginPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoginPostRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userName': json['user_name'],
        'password': json['password'],
    };
}

export function LoginPostRequestToJSON(value?: LoginPostRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user_name': value.userName,
        'password': value.password,
    };
}


