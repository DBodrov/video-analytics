/* tslint:disable */
/* eslint-disable */
/**
 * auth
 * powered by Flasgger
 *
 * The version of the OpenAPI document: 0.13.dev86
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    StatusChainsGetResponse200Chain,
    StatusChainsGetResponse200ChainFromJSON,
    StatusChainsGetResponse200ChainFromJSONTyped,
    StatusChainsGetResponse200ChainToJSON,
    StatusChainsGetResponse200Relations,
    StatusChainsGetResponse200RelationsFromJSON,
    StatusChainsGetResponse200RelationsFromJSONTyped,
    StatusChainsGetResponse200RelationsToJSON,
} from './';

/**
 * Сведения о цепочке статусов
 * @export
 * @interface StatusChainGetResponse200
 */
export interface StatusChainGetResponse200 {
    /**
     * 
     * @type {StatusChainsGetResponse200Chain}
     * @memberof StatusChainGetResponse200
     */
    chain: StatusChainsGetResponse200Chain;
    /**
     * Переход между статусами в цепочки статусов
     * @type {Array<StatusChainsGetResponse200Relations>}
     * @memberof StatusChainGetResponse200
     */
    relations: Array<StatusChainsGetResponse200Relations>;
    /**
     * Перечень идентификаторов статусов, входящих в цепочку статусов
     * @type {Array<number>}
     * @memberof StatusChainGetResponse200
     */
    statusIds: Array<number>;
}

export function StatusChainGetResponse200FromJSON(json: any): StatusChainGetResponse200 {
    return StatusChainGetResponse200FromJSONTyped(json, false);
}

export function StatusChainGetResponse200FromJSONTyped(json: any, ignoreDiscriminator: boolean): StatusChainGetResponse200 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'chain': StatusChainsGetResponse200ChainFromJSON(json['chain']),
        'relations': ((json['relations'] as Array<any>).map(StatusChainsGetResponse200RelationsFromJSON)),
        'statusIds': json['status_ids'],
    };
}

export function StatusChainGetResponse200ToJSON(value?: StatusChainGetResponse200 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'chain': StatusChainsGetResponse200ChainToJSON(value.chain),
        'relations': ((value.relations as Array<any>).map(StatusChainsGetResponse200RelationsToJSON)),
        'status_ids': value.statusIds,
    };
}

