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


export class PropertyType {
constructor(json: IPropertyType) {
  Object.assign(this as PropertyType, json)
}

    'identifier'?: string;
    'type'?: PropertyTypeTypeEnum;

}

interface IPropertyType {
  'identifier'?: string;
  'type'?: PropertyTypeTypeEnum;
}


export type PropertyTypeTypeEnum = "BOOLEAN" | "INTEGER" | "DOUBLE" | "STRING" | "DATE" | "CLOB" | "JSON" ;

