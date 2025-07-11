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


// May contain unused imports in some cases
// @ts-ignore
import type { AccountJsonldContext } from './account-jsonld-context';

/**
 * Exchange client and server\'s public key and generate symmetric key for encrypting messages.
 * @export
 * @interface CommunicationExchangeOutputJsonld
 */
export interface CommunicationExchangeOutputJsonld {
    /**
     * 
     * @type {AccountJsonldContext}
     * @memberof CommunicationExchangeOutputJsonld
     */
    '@context'?: AccountJsonldContext;
    /**
     * 
     * @type {string}
     * @memberof CommunicationExchangeOutputJsonld
     */
    '@id'?: string;
    /**
     * 
     * @type {string}
     * @memberof CommunicationExchangeOutputJsonld
     */
    '@type'?: string;
    /**
     * 
     * @type {string}
     * @memberof CommunicationExchangeOutputJsonld
     */
    'publicKey'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommunicationExchangeOutputJsonld
     */
    'symmetricKey'?: string | null;
}

