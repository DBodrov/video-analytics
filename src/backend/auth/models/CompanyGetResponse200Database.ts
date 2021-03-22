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
 * 
 * @export
 * @interface CompanyGetResponse200Database
 */
export interface CompanyGetResponse200Database {
    /**
     * Название сервера для хранения видеоаналитики
     * @type {string}
     * @memberof CompanyGetResponse200Database
     */
    hostname: string;
    /**
     * Порт для подключения к серверу
     * @type {number}
     * @memberof CompanyGetResponse200Database
     */
    port: number;
    /**
     * Название базы данных
     * @type {string}
     * @memberof CompanyGetResponse200Database
     */
    name: string;
    /**
     * Учетная запись для подключения
     * @type {string}
     * @memberof CompanyGetResponse200Database
     */
    user: string;
}

export function CompanyGetResponse200DatabaseFromJSON(json: any): CompanyGetResponse200Database {
    return CompanyGetResponse200DatabaseFromJSONTyped(json, false);
}

export function CompanyGetResponse200DatabaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanyGetResponse200Database {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hostname': json['hostname'],
        'port': json['port'],
        'name': json['name'],
        'user': json['user'],
    };
}

export function CompanyGetResponse200DatabaseToJSON(value?: CompanyGetResponse200Database | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hostname': value.hostname,
        'port': value.port,
        'name': value.name,
        'user': value.user,
    };
}


