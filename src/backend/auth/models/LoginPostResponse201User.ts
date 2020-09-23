/* tslint:disable */
/* eslint-disable */
/**
 * auth
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.12.dev74
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Сведения о пользователе
 * @export
 * @interface LoginPostResponse201User
 */
export interface LoginPostResponse201User {
    /**
     * Идентификатор пользователя
     * @type {number}
     * @memberof LoginPostResponse201User
     */
    id: number;
    /**
     * Учетная запись пользователя
     * @type {string}
     * @memberof LoginPostResponse201User
     */
    code: string;
    /**
     * Полное имя (Фамилия Имя Отчество)
     * @type {string}
     * @memberof LoginPostResponse201User
     */
    fullName: string;
    /**
     * Имя
     * @type {string}
     * @memberof LoginPostResponse201User
     */
    firstName: string;
    /**
     * Фамилия
     * @type {string}
     * @memberof LoginPostResponse201User
     */
    lastName: string;
    /**
     * Отчество
     * @type {string}
     * @memberof LoginPostResponse201User
     */
    middleName?: string;
    /**
     * Краткое имя (Фамилия И.О.)
     * @type {string}
     * @memberof LoginPostResponse201User
     */
    shortName: string;
    /**
     * Признак системного пользователя
     * @type {string}
     * @memberof LoginPostResponse201User
     */
    system: string;
    /**
     * Адрес электронной почты
     * @type {string}
     * @memberof LoginPostResponse201User
     */
    email?: string;
    /**
     * Идентификатор компании
     * @type {number}
     * @memberof LoginPostResponse201User
     */
    companyId?: number;
}

export function LoginPostResponse201UserFromJSON(json: any): LoginPostResponse201User {
    return LoginPostResponse201UserFromJSONTyped(json, false);
}

export function LoginPostResponse201UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoginPostResponse201User {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'code': json['code'],
        'fullName': json['full_name'],
        'firstName': json['first_name'],
        'lastName': json['last_name'],
        'middleName': !exists(json, 'middle_name') ? undefined : json['middle_name'],
        'shortName': json['short_name'],
        'system': json['system'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'companyId': !exists(json, 'company_id') ? undefined : json['company_id'],
    };
}

export function LoginPostResponse201UserToJSON(value?: LoginPostResponse201User | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'code': value.code,
        'full_name': value.fullName,
        'first_name': value.firstName,
        'last_name': value.lastName,
        'middle_name': value.middleName,
        'short_name': value.shortName,
        'system': value.system,
        'email': value.email,
        'company_id': value.companyId,
    };
}


