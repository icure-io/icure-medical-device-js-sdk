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


/**
* the list of all names of the patient, also containing the official full name information. Ordered by preference of use. First element is therefore the official name used for the patient in the application
*/
export class PersonName {
constructor(json: IPersonName) {
  Object.assign(this as PersonName, json)
}

    'lastName'?: string;
    'firstNames': Array<string>;
    'start'?: number;
    'end'?: number;
    'prefix': Array<string>;
    'suffix': Array<string>;
    'text'?: string;
    'use'?: PersonNameUseEnum;

}

interface IPersonName {
  'lastName'?: string;
  'firstNames'?: Array<string>;
  'start'?: number;
  'end'?: number;
  'prefix'?: Array<string>;
  'suffix'?: Array<string>;
  'text'?: string;
  'use'?: PersonNameUseEnum;
}


export type PersonNameUseEnum = "usual" | "official" | "temp" | "nickname" | "anonymous" | "maiden" | "old" | "other" ;
