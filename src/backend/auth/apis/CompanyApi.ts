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


import * as runtime from '../runtime';
import {
    CompaniesGetError,
    CompaniesGetErrorFromJSON,
    CompaniesGetErrorToJSON,
    CompanyGetError,
    CompanyGetErrorFromJSON,
    CompanyGetErrorToJSON,
    CompanyGetResponse200,
    CompanyGetResponse200FromJSON,
    CompanyGetResponse200ToJSON,
} from '../models';

export interface ApiAuthCompaniesCompanyIdGetRequest {
    companyId: number;
    authorization: string;
}

export interface ApiAuthCompaniesGetRequest {
    authorization: string;
}

/**
 * CompanyApi - interface
 *
 * @export
 * @interface CompanyApiInterface
 */
export interface CompanyApiInterface {
    /**
     * #
     * @summary # Сведения о компании
     * @param {number} companyId Идентификатор компании
     * @param {string} authorization Действующий токен доступа в формате \&quot;Bearer {token}\&quot;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompanyApiInterface
     */
    apiAuthCompaniesCompanyIdGetRaw(requestParameters: ApiAuthCompaniesCompanyIdGetRequest): Promise<runtime.ApiResponse<CompanyGetResponse200>>;

    /**
     * #
     * # Сведения о компании
     */
    apiAuthCompaniesCompanyIdGet(requestParameters: ApiAuthCompaniesCompanyIdGetRequest): Promise<CompanyGetResponse200>;

    /**
     * #
     * @summary # Сведения о компаниях
     * @param {string} authorization Действующий токен доступа в формате \&quot;Bearer {token}\&quot;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompanyApiInterface
     */
    apiAuthCompaniesGetRaw(requestParameters: ApiAuthCompaniesGetRequest): Promise<runtime.ApiResponse<Array<object>>>;

    /**
     * #
     * # Сведения о компаниях
     */
    apiAuthCompaniesGet(requestParameters: ApiAuthCompaniesGetRequest): Promise<Array<object>>;

}

/**
 *
 */
export class CompanyApi extends runtime.BaseAPI implements CompanyApiInterface {

    /**
     * #
     * # Сведения о компании
     */
    async apiAuthCompaniesCompanyIdGetRaw(requestParameters: ApiAuthCompaniesCompanyIdGetRequest): Promise<runtime.ApiResponse<CompanyGetResponse200>> {
        if (requestParameters.companyId === null || requestParameters.companyId === undefined) {
            throw new runtime.RequiredError('companyId','Required parameter requestParameters.companyId was null or undefined when calling apiAuthCompaniesCompanyIdGet.');
        }

        if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
            throw new runtime.RequiredError('authorization','Required parameter requestParameters.authorization was null or undefined when calling apiAuthCompaniesCompanyIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['Authorization'] = String(requestParameters.authorization);
        }

        const response = await this.request({
            path: `/api/auth/companies/{company_id}`.replace(`{${"company_id"}}`, encodeURIComponent(String(requestParameters.companyId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CompanyGetResponse200FromJSON(jsonValue));
    }

    /**
     * #
     * # Сведения о компании
     */
    async apiAuthCompaniesCompanyIdGet(requestParameters: ApiAuthCompaniesCompanyIdGetRequest): Promise<CompanyGetResponse200> {
        const response = await this.apiAuthCompaniesCompanyIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * #
     * # Сведения о компаниях
     */
    async apiAuthCompaniesGetRaw(requestParameters: ApiAuthCompaniesGetRequest): Promise<runtime.ApiResponse<Array<object>>> {
        if (requestParameters.authorization === null || requestParameters.authorization === undefined) {
            throw new runtime.RequiredError('authorization','Required parameter requestParameters.authorization was null or undefined when calling apiAuthCompaniesGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['Authorization'] = String(requestParameters.authorization);
        }

        const response = await this.request({
            path: `/api/auth/companies`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * #
     * # Сведения о компаниях
     */
    async apiAuthCompaniesGet(requestParameters: ApiAuthCompaniesGetRequest): Promise<Array<object>> {
        const response = await this.apiAuthCompaniesGetRaw(requestParameters);
        return await response.value();
    }

}
