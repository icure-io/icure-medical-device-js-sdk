/**
 * ICure Medical Device Micro Service
 * ICure Medical Device Micro Service
 *
 * OpenAPI spec version: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PropertyType } from './PropertyType';
import { TypedValueObject } from './TypedValueObject';

/**
* Extra properties for the user. Those properties are typed (see class Property)
*/
export class Property {
    'id'?: string;
    'type'?: PropertyType;
    'typedValue'?: TypedValueObject;
    'deleted'?: number;

}

