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
 *
 * @export
 * @interface UsersPostRequest
 */
export interface UsersPostRequest {
    /**
     * Учетная запись пользователя
     * @type {string}
     * @memberof UsersPostRequest
     */
    userName: string;
    /**
     * Фамилия пользователя
     * @type {string}
     * @memberof UsersPostRequest
     */
    lastName: string;
    /**
     * Имя пользователя
     * @type {string}
     * @memberof UsersPostRequest
     */
    firstName: string;
    /**
     * Отчество пользователя
     * @type {string}
     * @memberof UsersPostRequest
     */
    middleName?: string;
    /**
     * Адрес электронной почты
     * @type {string}
     * @memberof UsersPostRequest
     */
    email?: string;
    /**
     * Пароль к учетной записи
     * @type {string}
     * @memberof UsersPostRequest
     */
    password: string;
    /**
     * Признак технического пользователя
     * @type {boolean}
     * @memberof UsersPostRequest
     */
    system?: boolean;
    /**
     * Идентификатор компании
     * @type {number}
     * @memberof UsersPostRequest
     */
    companyId?: number;
}

export function UsersPostRequestFromJSON(json: any): UsersPostRequest {
    return UsersPostRequestFromJSONTyped(json, false);
}

export function UsersPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsersPostRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'userName': json['user_name'],
        'lastName': json['last_name'],
        'firstName': json['first_name'],
        'middleName': !exists(json, 'middle_name') ? undefined : json['middle_name'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'password': json['password'],
        'system': !exists(json, 'system') ? undefined : json['system'],
        'companyId': !exists(json, 'company_id') ? undefined : json['company_id'],
    };
}

export function UsersPostRequestToJSON(value?: UsersPostRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'user_name': value.userName,
        'last_name': value.lastName,
        'first_name': value.firstName,
        'middle_name': value.middleName,
        'email': value.email,
        'password': value.password,
        'system': value.system,
        'company_id': value.companyId,
    };
}


