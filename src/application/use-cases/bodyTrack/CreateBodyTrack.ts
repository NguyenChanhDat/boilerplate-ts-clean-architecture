import { CreateBodyTrackDto } from '@application/dto/bodyTrack/CreateBodyTrackDto';
import { ICreateBodyTrack } from './interfaces/ICreateBodyTrack';
import { bodyTrackServicesGlobal } from '@infra/locator/services/BodyTrackServicesGlobal';
import { IBodyTrackServices } from '@application/services/interfaces/IBodyTrackServices';

export class CreateBodyTrack implements ICreateBodyTrack {
  constructor(
    private readonly bodyTrackServices: IBodyTrackServices = bodyTrackServicesGlobal
  ) {}

  public execute = async (
    bodyTrackInput: CreateBodyTrackDto
  ): Promise<CreateBodyTrackDto> => {
    await this.bodyTrackServices.createEntity(bodyTrackInput);
    return bodyTrackInput;
  };
}
