import { ISetServices } from '@application/services/interfaces/ISetServices';
import { IDeleteSet } from './SetUseCaseExportDir';
import { setServicesGlobal } from '@infra/locator/services/SetServicesGlobal';

export class DeleteSet implements IDeleteSet {
  constructor(private readonly setServices: ISetServices = setServicesGlobal) {}

  public executeById = async (setId: number): Promise<void> => {
    await this.setServices.deleteEntity(setId);
  };
}
