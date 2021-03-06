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

import {CodingReference} from './CodingReference';
import {Identifier} from './Identifier';
import {SystemMetaDataEncrypted} from './SystemMetaDataEncrypted';

export class HealthcareElement {
constructor(json: IHealthcareElement) {
  Object.assign(this as HealthcareElement, json)
}

    /**
    * The Id of the healthcare element. We encourage using either a v4 UUID or a HL7 Id.
    */
    'id'?: string;
    'identifiers': Array<Identifier>;
    /**
    * The revision of the healthcare element in the database, used for conflict management / optimistic locking.
    */
    'rev'?: string;
    'created'?: number;
    'modified'?: number;
    'author'?: string;
    'responsible'?: string;
    'medicalLocationId'?: string;
    'tags': Set<CodingReference>;
    'codes': Set<CodingReference>;
    'endOfLife'?: number;
    'deletionDate'?: number;
    /**
    * The logical id of the healthcare element, used to link together different versions of the same healthcare element. We encourage using either a v4 UUID or a HL7 Id.
    */
    'healthElementId'?: string;
    /**
    * The date (unix epoch in ms) when the healthcare element is noted to have started and also closes on the same date
    */
    'valueDate'?: number;
    /**
    * The date (unix epoch in ms) of the start of the healthcare element.
    */
    'openingDate'?: number;
    /**
    * The date (unix epoch in ms) marking the end of the healthcare element.
    */
    'closingDate'?: number;
    /**
    * Description of the healthcare element.
    */
    'description'?: string;
    /**
    * A text note (can be confidential, encrypted by default).
    */
    'note'?: string;
    'systemMetaData'?: SystemMetaDataEncrypted;

}

interface IHealthcareElement {
  'id'?: string;
  'identifiers'?: Array<Identifier>;
  'rev'?: string;
  'created'?: number;
  'modified'?: number;
  'author'?: string;
  'responsible'?: string;
  'medicalLocationId'?: string;
  'tags'?: Set<CodingReference>;
  'codes'?: Set<CodingReference>;
  'endOfLife'?: number;
  'deletionDate'?: number;
  'healthElementId'?: string;
  'valueDate'?: number;
  'openingDate'?: number;
  'closingDate'?: number;
  'description'?: string;
  'note'?: string;
  'systemMetaData'?: SystemMetaDataEncrypted;
}

