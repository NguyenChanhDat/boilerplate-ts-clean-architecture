import { CreateSetDto } from '@application/dto/set/CreateSetDto';
import { ICreateSet } from './interfaces/ICreateSet';
import { setServicesGlobal } from '@infra/locator/services/SetServicesGlobal';
import { ISetServices } from '@application/services/interfaces/ISetServices';

export class CreateSet implements ICreateSet {
  constructor(private readonly setServices: ISetServices = setServicesGlobal) {}

  public execute = async (setInput: CreateSetDto): Promise<CreateSetDto> => {
    await this.setServices.createEntity(setInput);
    return setInput;
  };
}
