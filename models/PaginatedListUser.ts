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

import { PaginatedDocumentKeyAndIdPairObject } from './PaginatedDocumentKeyAndIdPairObject';
import { User } from './User';

export class PaginatedListUser {
    'pageSize': number;
    'totalSize': number;
    'rows': Array<User>;
    'nextKeyPair'?: PaginatedDocumentKeyAndIdPairObject;

}

