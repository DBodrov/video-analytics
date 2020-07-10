/* tslint:disable */
/* eslint-disable */
/**
 * va
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.16.dev115
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    RefIncidentsGetResponse200,
    RefIncidentsGetResponse200FromJSON,
    RefIncidentsGetResponse200ToJSON,
} from '../models';

export interface ApiVaCompaniesCompanyIdRefsIncidentsGetRequest {
    companyId: number;
}

/**
 * RefsApi - interface
 * 
 * @export
 * @interface RefsApiInterface
 */
export interface RefsApiInterface {
    /**
     * # 
     * @summary # Справочные сведения об инцидентах
     * @param {number} companyId Идентификатор компании
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RefsApiInterface
     */
    apiVaCompaniesCompanyIdRefsIncidentsGetRaw(requestParameters: ApiVaCompaniesCompanyIdRefsIncidentsGetRequest): Promise<runtime.ApiResponse<RefIncidentsGetResponse200>>;

    /**
     * # 
     * # Справочные сведения об инцидентах
     */
    apiVaCompaniesCompanyIdRefsIncidentsGet(requestParameters: ApiVaCompaniesCompanyIdRefsIncidentsGetRequest): Promise<RefIncidentsGetResponse200>;

}

/**
 * 
 */
export class RefsApi extends runtime.BaseAPI implements RefsApiInterface {

    /**
     * # 
     * # Справочные сведения об инцидентах
     */
    async apiVaCompaniesCompanyIdRefsIncidentsGetRaw(requestParameters: ApiVaCompaniesCompanyIdRefsIncidentsGetRequest): Promise<runtime.ApiResponse<RefIncidentsGetResponse200>> {
        if (requestParameters.companyId === null || requestParameters.companyId === undefined) {
            throw new runtime.RequiredError('companyId','Required parameter requestParameters.companyId was null or undefined when calling apiVaCompaniesCompanyIdRefsIncidentsGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/va/companies/{company_id}/refs/incidents`.replace(`{${"company_id"}}`, encodeURIComponent(String(requestParameters.companyId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RefIncidentsGetResponse200FromJSON(jsonValue));
    }

    /**
     * # 
     * # Справочные сведения об инцидентах
     */
    async apiVaCompaniesCompanyIdRefsIncidentsGet(requestParameters: ApiVaCompaniesCompanyIdRefsIncidentsGetRequest): Promise<RefIncidentsGetResponse200> {
        const response = await this.apiVaCompaniesCompanyIdRefsIncidentsGetRaw(requestParameters);
        return await response.value();
    }

}
