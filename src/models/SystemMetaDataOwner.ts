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


export class SystemMetaDataOwner {
constructor(json: ISystemMetaDataOwner) {
  Object.assign(this as SystemMetaDataOwner, json)
}

    'publicKey': string;
    'hcPartyKeys': { [key: string]: Array<string>; };
    'privateKeyShamirPartitions': { [key: string]: string; };
    'aesExchangeKeys' : { [key: string]: { [key: string]: Array<string>; }; };
    'transferKeys' : { [key: string]: { [key: string]: string; }; };
    'lostHcPartyKeys' : Array<string>;
}

interface ISystemMetaDataOwner {
  'publicKey'?: string;
  'hcPartyKeys'?: { [key: string]: Array<string>; };
  'privateKeyShamirPartitions'?: { [key: string]: string; };
  'aesExchangeKeys'?: { [key: string]: { [key: string]: Array<string>; }; };
  'transferKeys'?: { [key: string]: { [key: string]: string; }; };
  'lostHcPartyKeys'?: Array<string>;
}

