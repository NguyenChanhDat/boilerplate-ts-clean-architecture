import { Set } from '@domain/entities/Set';
import { IGetSet } from './SetUseCaseExportDir';
import { setServicesGlobal } from '@infra/locator/services/SetServicesGlobal';
import { ISetServices } from '@application/services/interfaces/ISetServices';

export class GetSet implements IGetSet {
  constructor(private readonly setServices: ISetServices = setServicesGlobal) {}

  public getAll = async (): Promise<Set[] | null> => {
    return await this.setServices.showListEntity();
  };

  public getById = async (id: number): Promise<Set | null> => {
    return await this.setServices.getEntityById(id);
  };
}
