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



/**
 * 
 * @export
 * @interface LogJsonld
 */
export interface LogJsonld {
    /**
     * 
     * @type {string}
     * @memberof LogJsonld
     */
    '@id'?: string;
    /**
     * 
     * @type {string}
     * @memberof LogJsonld
     */
    '@type'?: string;
    /**
     * 
     * @type {string}
     * @memberof LogJsonld
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof LogJsonld
     */
    'account': string | null;
    /**
     * 
     * @type {string}
     * @memberof LogJsonld
     */
    'createdAt': string;
    /**
     * 
     * @type {string}
     * @memberof LogJsonld
     */
    'type': string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof LogJsonld
     */
    'data'?: { [key: string]: string; };
}

