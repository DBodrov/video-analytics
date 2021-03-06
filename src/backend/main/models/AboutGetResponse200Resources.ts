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
 * 
 * @export
 * @interface AboutGetResponse200Resources
 */
export interface AboutGetResponse200Resources {
    /**
     * Название метода
     * @type {string}
     * @memberof AboutGetResponse200Resources
     */
    name: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof AboutGetResponse200Resources
     */
    methods: Array<string>;
    /**
     * Раздел
     * @type {string}
     * @memberof AboutGetResponse200Resources
     */
    section: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof AboutGetResponse200Resources
     */
    urls: Array<string>;
}

export function AboutGetResponse200ResourcesFromJSON(json: any): AboutGetResponse200Resources {
    return AboutGetResponse200ResourcesFromJSONTyped(json, false);
}

export function AboutGetResponse200ResourcesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AboutGetResponse200Resources {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'methods': json['methods'],
        'section': json['section'],
        'urls': json['urls'],
    };
}

export function AboutGetResponse200ResourcesToJSON(value?: AboutGetResponse200Resources | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'methods': value.methods,
        'section': value.section,
        'urls': value.urls,
    };
}


