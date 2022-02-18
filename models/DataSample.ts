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

import { CodingReference } from './CodingReference';
import { Content } from './Content';
import { Identifier } from './Identifier';

/**
* A Data Sample represents a medical information, provided by a Data Owner concerning one specific [Patient], for a T moment.       Provided by a Data Owner means that the data sample may have been either provided by a [HealthcareProfessional] or a [Patient], either collected by a [MedicalDevice].         Data Samples provided by the patient include subjective information, such as complaints, reason for visit, feelings, etc. or objective information       like bio-metric measures (blood pressure, temperature, heart beat, etc.), or physical exam description, diagnosis, prescription, integration of lab reports from another [HealthcareProfessional], action plan, etc.      Any action performed by the [HealthcareProfessional] (which is relevant for a [HealthcareElement] of a [Patient]) is considered as a [DataSample].       The data samples can be linked to healthcare elements or other structuring elements of the medical record
*/
export class DataSample {
constructor(json: IDataSample) {
  Object.assign(this as DataSample, json)
}

    /**
    * The Id of the Data sample. We encourage using either a v4 UUID or a HL7 Id.
    */
    'id'?: string;
    /**
    * The transactionId is used when a single data sample had to be split into parts for technical reasons. Several data samples with the same non null transaction id form one single data sample
    */
    'transactionId'?: string;
    /**
    * Typically used for business / client identifiers. An identifier should identify a data sample uniquely and unambiguously. However, iCure can't guarantee the uniqueness of those identifiers : This is something you need to take care of.
    */
    'identifier': Array<Identifier>;
    /**
    * Id of the batch that embeds this data sample
    */
    'batchId'?: string;
    /**
    * List of IDs of all healthcare elements for which the data sample is provided. Only used when the Data sample is emitted outside of its batch
    */
    'healthElementsIds'?: Set<string>;
    /**
    * List of Ids of all canvases linked to the Data sample. Only used when the Data sample is emitted outside of its batch.
    */
    'canvasesIds'?: Set<string>;
    /**
    * Used for sorting data samples inside an upper object (A batch, a transaction, a FHIR bundle, ...)
    */
    'index'?: number;
    /**
    * Information contained in the data sample (Measure, number, ...). Content is localized, using ISO language code as key
    */
    'content': { [key: string]: Content; };
    /**
    * The date (YYYYMMDDhhmmss) when the Data sample is noted to have started and also closes on the same date
    */
    'valueDate'?: number;
    /**
    * The date (YYYYMMDDhhmmss) of the start of the Data sample
    */
    'openingDate'?: number;
    /**
    * The date (YYYYMMDDhhmmss) marking the end of the Data sample
    */
    'closingDate'?: number;
    /**
    * The timestamp (unix epoch in ms) of creation of this data sample in iCure system. Will be filled automatically if not provided.
    */
    'created'?: number;
    /**
    * The timestamp (unix epoch in ms) of the latest modification of this data sample in iCure system. Will be filled automatically if not provided.
    */
    'modified'?: number;
    /**
    * Soft delete (unix epoch in ms) timestamp of the data sample
    */
    'endOfLife'?: number;
    /**
    * The id of the [User] that created this data sample. When creating the data sample, will be filled automatically by the current user id if not provided.
    */
    'author'?: string;
    /**
    * The id of the data owner that is responsible of this data sample. When creating the data sample, will be filled automatically by the current user data owner id ([HealthcareProfessional], [Patient] or [MedicalDevice]) if missing
    */
    'responsible'?: string;
    /**
    * Text, comments on the Data sample provided
    */
    'comment'?: string;
    /**
    * Links towards related data samples (possibly in other batches)
    */
    'qualifiedLinks': { [key: string]: { [key: string]: string; }; };
    /**
    * A code is an item from a codification system that qualifies the content of this data sample. SNOMED-CT, ICPC-2 or ICD-10 codifications systems can be used for codes
    */
    'codes': Set<CodingReference>;
    /**
    * A label is an item from a codification system that qualifies a data sample as being member of a certain class, whatever the value it might have taken. If the label qualifies the content of a field, it means that whatever the content of the field, the label will always apply. LOINC is a codification system typically used for labels.
    */
    'labels': Set<CodingReference>;

}

interface IDataSample {
  'id'?: string;
  'transactionId'?: string;
  'identifier'?: Array<Identifier>;
  'batchId'?: string;
  'healthElementsIds'?: Set<string>;
  'canvasesIds'?: Set<string>;
  'index'?: number;
  'content'?: { [key: string]: Content; };
  'valueDate'?: number;
  'openingDate'?: number;
  'closingDate'?: number;
  'created'?: number;
  'modified'?: number;
  'endOfLife'?: number;
  'author'?: string;
  'responsible'?: string;
  'comment'?: string;
  'qualifiedLinks'?: { [key: string]: { [key: string]: string; }; };
  'codes'?: Set<CodingReference>;
  'labels'?: Set<CodingReference>;
}
