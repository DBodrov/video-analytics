/* tslint:disable */
/* eslint-disable */
/**
 * auth
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.12.dev78
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    LoginPostResponse201User,
    LoginPostResponse201UserFromJSON,
    LoginPostResponse201UserFromJSONTyped,
    LoginPostResponse201UserToJSON,
    LoginPostToken,
    LoginPostTokenFromJSON,
    LoginPostTokenFromJSONTyped,
    LoginPostTokenToJSON,
} from './';

/**
 * 
 * @export
 * @interface LoginPostResponse201
 */
export interface LoginPostResponse201 {
    /**
     * 
     * @type {LoginPostResponse201User}
     * @memberof LoginPostResponse201
     */
    user: LoginPostResponse201User;
    /**
     * 
     * @type {LoginPostToken}
     * @memberof LoginPostResponse201
     */
    accessToken: LoginPostToken;
    /**
     * 
     * @type {LoginPostToken}
     * @memberof LoginPostResponse201
     */
    refreshToken: LoginPostToken;
}

export function LoginPostResponse201FromJSON(json: any): LoginPostResponse201 {
    return LoginPostResponse201FromJSONTyped(json, false);
}

export function LoginPostResponse201FromJSONTyped(json: any, ignoreDiscriminator: boolean): LoginPostResponse201 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'user': LoginPostResponse201UserFromJSON(json['user']),
        'accessToken': LoginPostTokenFromJSON(json['access_token']),
        'refreshToken': LoginPostTokenFromJSON(json['refresh_token']),
    };
}

export function LoginPostResponse201ToJSON(value?: LoginPostResponse201 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user': LoginPostResponse201UserToJSON(value.user),
        'access_token': LoginPostTokenToJSON(value.accessToken),
        'refresh_token': LoginPostTokenToJSON(value.refreshToken),
    };
}


