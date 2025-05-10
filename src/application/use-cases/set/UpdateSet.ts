import { IUpdateSet } from './interfaces/IUpdateSet';
import { setServicesGlobal } from '@infra/locator/services/SetServicesGlobal';
import { ISetServices } from '@application/services/interfaces/ISetServices';
import { Set } from '@domain/entities/Set';

export class UpdateSet implements IUpdateSet {
  constructor(private readonly setServices: ISetServices = setServicesGlobal) {}

  public execute = async (setInfo: Set): Promise<Set> => {
    const setById = await this.setServices.getEntityById(setInfo.id);
    if (!setById) {
      throw new Error(`Set with id ${setInfo.id} not found`);
    }
    await this.setServices.updateEntity(setInfo.id, setInfo);
    return setInfo;
  };
}
