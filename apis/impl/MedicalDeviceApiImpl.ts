import {MedicalDevice} from '../../models/MedicalDevice';
import {Filter} from "../../models/Filter";
import {PaginatedListMedicalDevice} from "../../models/PaginatedListMedicalDevice";
import {MedicalDeviceApi} from "../MedicalDeviceApi";
import {
  IccAuthApi,
  IccCodeApi,
  IccContactXApi,
  IccCryptoXApi,
  IccDocumentXApi,
  IccHcpartyXApi,
  IccHelementXApi,
  IccPatientXApi,
  IccUserXApi,
  ListOfIds
} from "@icure/api";
import {IccDeviceApi} from "@icure/api/icc-api/api/IccDeviceApi";
import {forceUuid} from "../../mappers/utils";
import {MedicalDeviceMapper} from "../../mappers/medicalDevice";

class MedicalDeviceApiImpl implements MedicalDeviceApi {
  private deviceApi: IccDeviceApi;

  constructor(api: { cryptoApi: IccCryptoXApi; codeApi: IccCodeApi, authApi: IccAuthApi; userApi: IccUserXApi; patientApi: IccPatientXApi; healthcarePartyApi: IccHcpartyXApi; contactApi: IccContactXApi; healthcareElementApi: IccHelementXApi; documentApi: IccDocumentXApi; deviceApi: IccDeviceApi; }) {
    this.deviceApi = api.deviceApi
  }

  async createOrModifyMedicalDevice(medicalDevice: MedicalDevice): Promise<MedicalDevice> {
    const createdDevice = (await this.createOrModifyMedicalDevices([medicalDevice])).find(e => true);
    if (createdDevice != undefined) {
      return createdDevice;
    } else {
      throw new Error("Couldn't create medical device");
    }
  }

  async createOrModifyMedicalDevices(medicalDevice: Array<MedicalDevice>): Promise<Array<MedicalDevice>> {
    const {toMedicalDevice, toDeviceDto} = MedicalDeviceMapper;
    const medicalDevicesToCreate = medicalDevice.filter(dev => dev.rev == null);
    const medicalDevicesToUpdate = medicalDevice.filter(dev => dev.rev != null);

    if (!medicalDevicesToUpdate.every(device => device.id != null && forceUuid(device.id))) {
      throw Error("Update id should be provided as an UUID");
    }

    const deviceToCreate = medicalDevicesToCreate.map(d => toDeviceDto(d));
    const deviceToUpdate = medicalDevicesToCreate.map(d => toDeviceDto(d));

    const createdDevices = await this.deviceApi.createDevices(deviceToCreate);
    const updatedDevices = await this.deviceApi.updateDevices(deviceToUpdate);
    const processedDeviceIds = [...createdDevices, ...updatedDevices].map(d => d.id!);

    return (await this.deviceApi.getDevices(new ListOfIds({ids: processedDeviceIds}))).map(d => toMedicalDevice(d));
  }

  async deleteMedicalDevice(medicalDeviceId: string): Promise<string> {
    const deletedDeviceRev = (await this.deviceApi.deleteDevice(medicalDeviceId)).rev
    if (deletedDeviceRev != undefined) {
      return deletedDeviceRev;
    }
    throw Error("Invalid medical device id")
  }

  async deleteMedicalDevices(requestBody: Array<string>): Promise<Array<string>> {
    return (await this.deviceApi.deleteDevices(new ListOfIds({ids: requestBody}))).filter(d => d.rev != undefined).map(d => d.rev!);
  }

  async filterMedicalDevices(filter: Filter, nextDeviceId?: string, limit?: number): Promise<PaginatedListMedicalDevice> {
    //return (await this.deviceApi.filterDevicesBy(nextDeviceId, limit,));
    return Promise.resolve(new PaginatedListMedicalDevice({}));
  }

  async getMedicalDevice(medicalDeviceId: string): Promise<MedicalDevice> {
    return MedicalDeviceMapper.toMedicalDevice(await this.deviceApi.getDevice(medicalDeviceId));
  }

  async matchMedicalDevices(filter: Filter): Promise<Array<string>> {
    return Promise.resolve([]);
  }
}
