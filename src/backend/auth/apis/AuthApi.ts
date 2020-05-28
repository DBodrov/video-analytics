/* tslint:disable */
/* eslint-disable */
/**
 * auth
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
  CheckTokenResponse200,
  CheckTokenResponse200FromJSON,
  LoginPostRequest,
  LoginPostRequestToJSON,
  LoginPostResponse201,
  LoginPostResponse201FromJSON,
  TokenPostResponse201,
  TokenPostResponse201FromJSON,
} from '../models';
import * as runtime from '../runtime';

export interface ApiAuthCheckTokenGetRequest {
  authorization: string;
}

export interface ApiAuthLoginPostRequest {
  request: LoginPostRequest;
}

export interface ApiAuthTokenPostRequest {
  authorization: string;
}

/**
 * AuthApi - interface
 *
 * @export
 * @interface AuthApiInterface
 */
export interface AuthApiInterface {
  /**
   * #
   * @summary # Проверка токена доступа
   * @param {string} authorization Действующий токен доступа в формате \&quot;Bearer {token}\&quot;
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthApiInterface
   */
  apiAuthCheckTokenGetRaw(
    requestParameters: ApiAuthCheckTokenGetRequest,
  ): Promise<runtime.ApiResponse<CheckTokenResponse200>>;

  /**
   * #
   * # Проверка токена доступа
   */
  apiAuthCheckTokenGet(
    requestParameters: ApiAuthCheckTokenGetRequest,
  ): Promise<CheckTokenResponse200>;

  /**
   * #
   * @summary # Идентификация пользователя
   * @param {LoginPostRequest} request Авторизационные данные пользователя
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthApiInterface
   */
  apiAuthLoginPostRaw(
    requestParameters: ApiAuthLoginPostRequest,
  ): Promise<runtime.ApiResponse<LoginPostResponse201>>;

  /**
   * #
   * # Идентификация пользователя
   */
  apiAuthLoginPost(
    requestParameters: ApiAuthLoginPostRequest,
  ): Promise<LoginPostResponse201>;

  /**
   * #
   * @summary # Обновление токена доступа
   * @param {string} authorization Действующий токен доступа (refresh) в формате \&quot;Bearer {token}\&quot;
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthApiInterface
   */
  apiAuthTokenPostRaw(
    requestParameters: ApiAuthTokenPostRequest,
  ): Promise<runtime.ApiResponse<TokenPostResponse201>>;

  /**
   * #
   * # Обновление токена доступа
   */
  apiAuthTokenPost(
    requestParameters: ApiAuthTokenPostRequest,
  ): Promise<TokenPostResponse201>;
}

/**
 *
 */
export class AuthApi extends runtime.BaseAPI implements AuthApiInterface {
  /**
   * #
   * # Проверка токена доступа
   */
  async apiAuthCheckTokenGetRaw(
    requestParameters: ApiAuthCheckTokenGetRequest,
  ): Promise<runtime.ApiResponse<CheckTokenResponse200>> {
    if (
      requestParameters.authorization === null ||
      requestParameters.authorization === undefined
    ) {
      throw new runtime.RequiredError(
        'authorization',
        'Required parameter requestParameters.authorization was null or undefined when calling apiAuthCheckTokenGet.',
      );
    }

    const queryParameters: runtime.HTTPQuery = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (
      requestParameters.authorization !== undefined &&
      requestParameters.authorization !== null
    ) {
      headerParameters['Authorization'] = String(
        requestParameters.authorization,
      );
    }

    const response = await this.request({
      path: `/api/auth/check-token`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, jsonValue =>
      CheckTokenResponse200FromJSON(jsonValue),
    );
  }

  /**
   * #
   * # Проверка токена доступа
   */
  async apiAuthCheckTokenGet(
    requestParameters: ApiAuthCheckTokenGetRequest,
  ): Promise<CheckTokenResponse200> {
    const response = await this.apiAuthCheckTokenGetRaw(requestParameters);
    return await response.value();
  }

  /**
   * #
   * # Идентификация пользователя
   */
  async apiAuthLoginPostRaw(
    requestParameters: ApiAuthLoginPostRequest,
  ): Promise<runtime.ApiResponse<LoginPostResponse201>> {
    if (
      requestParameters.request === null ||
      requestParameters.request === undefined
    ) {
      throw new runtime.RequiredError(
        'request',
        'Required parameter requestParameters.request was null or undefined when calling apiAuthLoginPost.',
      );
    }

    const queryParameters: runtime.HTTPQuery = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/api/auth/login`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: LoginPostRequestToJSON(requestParameters.request),
    });

    return new runtime.JSONApiResponse(response, jsonValue =>
      LoginPostResponse201FromJSON(jsonValue),
    );
  }

  /**
   * #
   * # Идентификация пользователя
   */
  async apiAuthLoginPost(
    requestParameters: ApiAuthLoginPostRequest,
  ): Promise<LoginPostResponse201> {
    const response = await this.apiAuthLoginPostRaw(requestParameters);
    return await response.value();
  }

  /**
   * #
   * # Обновление токена доступа
   */
  async apiAuthTokenPostRaw(
    requestParameters: ApiAuthTokenPostRequest,
  ): Promise<runtime.ApiResponse<TokenPostResponse201>> {
    if (
      requestParameters.authorization === null ||
      requestParameters.authorization === undefined
    ) {
      throw new runtime.RequiredError(
        'authorization',
        'Required parameter requestParameters.authorization was null or undefined when calling apiAuthTokenPost.',
      );
    }

    const queryParameters: runtime.HTTPQuery = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (
      requestParameters.authorization !== undefined &&
      requestParameters.authorization !== null
    ) {
      headerParameters['Authorization'] = String(
        requestParameters.authorization,
      );
    }

    const response = await this.request({
      path: `/api/auth/token`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, jsonValue =>
      TokenPostResponse201FromJSON(jsonValue),
    );
  }

  /**
   * #
   * # Обновление токена доступа
   */
  async apiAuthTokenPost(
    requestParameters: ApiAuthTokenPostRequest,
  ): Promise<TokenPostResponse201> {
    const response = await this.apiAuthTokenPostRaw(requestParameters);
    return await response.value();
  }
}
