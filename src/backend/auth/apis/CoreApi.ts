/* tslint:disable */
/* eslint-disable */
/**
 * auth
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.10.dev66
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    AboutGetResponse200,
    AboutGetResponse200FromJSON,
    AboutGetResponse200ToJSON,
} from '../models';

/**
 * CoreApi - interface
 * 
 * @export
 * @interface CoreApiInterface
 */
export interface CoreApiInterface {
    /**
     * # 
     * @summary # Сведения о сервисе и API
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CoreApiInterface
     */
    apiAuthAboutGetRaw(): Promise<runtime.ApiResponse<AboutGetResponse200>>;

    /**
     * # 
     * # Сведения о сервисе и API
     */
    apiAuthAboutGet(): Promise<AboutGetResponse200>;

    /**
     * # 
     * @summary # Доступность сервиса
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CoreApiInterface
     */
    apiAuthHeartbeatGetRaw(): Promise<runtime.ApiResponse<object>>;

    /**
     * # 
     * # Доступность сервиса
     */
    apiAuthHeartbeatGet(): Promise<object>;

}

/**
 * 
 */
export class CoreApi extends runtime.BaseAPI implements CoreApiInterface {

    /**
     * # 
     * # Сведения о сервисе и API
     */
    async apiAuthAboutGetRaw(): Promise<runtime.ApiResponse<AboutGetResponse200>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/auth/about`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AboutGetResponse200FromJSON(jsonValue));
    }

    /**
     * # 
     * # Сведения о сервисе и API
     */
    async apiAuthAboutGet(): Promise<AboutGetResponse200> {
        const response = await this.apiAuthAboutGetRaw();
        return await response.value();
    }

    /**
     * # 
     * # Доступность сервиса
     */
    async apiAuthHeartbeatGetRaw(): Promise<runtime.ApiResponse<object>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/auth/heartbeat`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * # 
     * # Доступность сервиса
     */
    async apiAuthHeartbeatGet(): Promise<object> {
        const response = await this.apiAuthHeartbeatGetRaw();
        return await response.value();
    }

}
