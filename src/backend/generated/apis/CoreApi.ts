/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.0.1
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
    apiVaAboutGetRaw(): Promise<runtime.ApiResponse<AboutGetResponse200>>;

    /**
     * # 
     * # Сведения о сервисе и API
     */
    apiVaAboutGet(): Promise<AboutGetResponse200>;

    /**
     * # 
     * @summary # Доступность сервиса
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CoreApiInterface
     */
    apiVaHeartbeatGetRaw(): Promise<runtime.ApiResponse<object>>;

    /**
     * # 
     * # Доступность сервиса
     */
    apiVaHeartbeatGet(): Promise<object>;

}

/**
 * 
 */
export class CoreApi extends runtime.BaseAPI implements CoreApiInterface {

    /**
     * # 
     * # Сведения о сервисе и API
     */
    async apiVaAboutGetRaw(): Promise<runtime.ApiResponse<AboutGetResponse200>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/va/about`,
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
    async apiVaAboutGet(): Promise<AboutGetResponse200> {
        const response = await this.apiVaAboutGetRaw();
        return await response.value();
    }

    /**
     * # 
     * # Доступность сервиса
     */
    async apiVaHeartbeatGetRaw(): Promise<runtime.ApiResponse<object>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/va/heartbeat`,
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
    async apiVaHeartbeatGet(): Promise<object> {
        const response = await this.apiVaHeartbeatGetRaw();
        return await response.value();
    }

}
