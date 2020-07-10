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

import { exists, mapValues } from '../runtime';
import {
    ModelsRequestModel,
    ModelsRequestModelFromJSON,
    ModelsRequestModelFromJSONTyped,
    ModelsRequestModelToJSON,
    ModelsRequestTocs,
    ModelsRequestTocsFromJSON,
    ModelsRequestTocsFromJSONTyped,
    ModelsRequestTocsToJSON,
} from './';

/**
 *
 * @export
 * @interface ModelsRequest
 */
export interface ModelsRequest {
    /**
     *
     * @type {ModelsRequestModel}
     * @memberof ModelsRequest
     */
    model: ModelsRequestModel;
    /**
     *
     * @type {Array<ModelsRequestTocs>}
     * @memberof ModelsRequest
     */
    tocs: Array<ModelsRequestTocs>;
}

export function ModelsRequestFromJSON(json: any): ModelsRequest {
    return ModelsRequestFromJSONTyped(json, false);
}

export function ModelsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'model': ModelsRequestModelFromJSON(json['model']),
        'tocs': ((json['tocs'] as Array<any>).map(ModelsRequestTocsFromJSON)),
    };
}

export function ModelsRequestToJSON(value?: ModelsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'model': ModelsRequestModelToJSON(value.model),
        'tocs': ((value.tocs as Array<any>).map(ModelsRequestTocsToJSON)),
    };
}


