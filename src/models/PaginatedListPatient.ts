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

import {PaginatedDocumentKeyAndIdPairObject} from './PaginatedDocumentKeyAndIdPairObject';
import {Patient} from './Patient';

export class PaginatedListPatient {
constructor(json: IPaginatedListPatient) {
  Object.assign(this as PaginatedListPatient, json)
}

    'pageSize': number;
    'totalSize': number;
    'rows': Array<Patient>;
    'nextKeyPair'?: PaginatedDocumentKeyAndIdPairObject;

}

interface IPaginatedListPatient {
  'pageSize'?: number;
  'totalSize'?: number;
  'rows'?: Array<Patient>;
  'nextKeyPair'?: PaginatedDocumentKeyAndIdPairObject;
}
