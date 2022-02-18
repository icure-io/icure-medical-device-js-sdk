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

import { Delegation } from './Delegation';

export class SystemMetaDataOwnerEncrypted {
constructor(json: ISystemMetaDataOwnerEncrypted) {
  Object.assign(this as SystemMetaDataOwnerEncrypted, json)
}

    'hcPartyKeys': { [key: string]: Array<string>; };
    'privateKeyShamirPartitions': { [key: string]: string; };
    'secretForeignKeys': Array<string>;
    'cryptedForeignKeys': { [key: string]: Set<Delegation>; };
    'delegations': { [key: string]: Set<Delegation>; };
    'encryptionKeys': { [key: string]: Set<Delegation>; };

}

interface ISystemMetaDataOwnerEncrypted {
  'hcPartyKeys'?: { [key: string]: Array<string>; };
  'privateKeyShamirPartitions'?: { [key: string]: string; };
  'secretForeignKeys'?: Array<string>;
  'cryptedForeignKeys'?: { [key: string]: Set<Delegation>; };
  'delegations'?: { [key: string]: Set<Delegation>; };
  'encryptionKeys'?: { [key: string]: Set<Delegation>; };
}
