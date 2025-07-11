/* tslint:disable */
/* eslint-disable */
/**
 * Hello API Platform
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from '../common';
// @ts-ignore
import { BASE_PATH, type RequestArgs, BaseAPI } from '../base';
// @ts-ignore
import type { LoginCheckPost200Response } from '../models';
// @ts-ignore
import type { LoginCheckPostRequest } from '../models';
/**
 * LoginCheckApi - axios parameter creator
 * @export
 */
export const LoginCheckApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Creates a user token.
     * @summary Creates a user token.
     * @param {LoginCheckPostRequest} loginCheckPostRequest The login data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    checkPost: async (
      loginCheckPostRequest: LoginCheckPostRequest,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'loginCheckPostRequest' is not null or undefined
      assertParamExists(
        'checkPost',
        'loginCheckPostRequest',
        loginCheckPostRequest
      );
      const localVarPath = `/api/login`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication JWT required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        loginCheckPostRequest,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * LoginCheckApi - functional programming interface
 * @export
 */
export const LoginCheckApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    LoginCheckApiAxiosParamCreator(configuration);
  return {
    /**
     * Creates a user token.
     * @summary Creates a user token.
     * @param {LoginCheckPostRequest} loginCheckPostRequest The login data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async checkPost(
      loginCheckPostRequest: LoginCheckPostRequest,
      options?: RawAxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<LoginCheckPost200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.checkPost(
        loginCheckPostRequest,
        options
      );
      const localVarOperationServerBasePath = BASE_PATH;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath);
    },
  };
};

/**
 * LoginCheckApi - factory interface
 * @export
 */
export const LoginCheckApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = LoginCheckApiFp(configuration);
  return {
    /**
     * Creates a user token.
     * @summary Creates a user token.
     * @param {LoginCheckApiCheckPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    checkPost(
      requestParameters: LoginCheckApiCheckPostRequest,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<LoginCheckPost200Response> {
      return localVarFp
        .checkPost(requestParameters.loginCheckPostRequest, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for checkPost operation in LoginCheckApi.
 * @export
 * @interface LoginCheckApiCheckPostRequest
 */
export interface LoginCheckApiCheckPostRequest {
  /**
   * The login data
   * @type {LoginCheckPostRequest}
   * @memberof LoginCheckApiCheckPost
   */
  readonly loginCheckPostRequest: LoginCheckPostRequest;
}

/**
 * LoginCheckApi - object-oriented interface
 * @export
 * @class LoginCheckApi
 * @extends {BaseAPI}
 */
export class LoginCheckApi extends BaseAPI {
  /**
   * Creates a user token.
   * @summary Creates a user token.
   * @param {LoginCheckApiCheckPostRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LoginCheckApi
   */
  public checkPost(
    requestParameters: LoginCheckApiCheckPostRequest,
    options?: RawAxiosRequestConfig
  ) {
    return LoginCheckApiFp(this.configuration)
      .checkPost(requestParameters.loginCheckPostRequest, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
