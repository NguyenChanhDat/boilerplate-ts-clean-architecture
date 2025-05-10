import { IBodyTrackServices } from '@application/services/interfaces/IBodyTrackServices';
import { IDeleteBodyTrack } from './interfaces/IDeleteBodyTrack';
import { bodyTrackServicesGlobal } from '@infra/locator/services/BodyTrackServicesGlobal';

export class DeleteBodyTrack implements IDeleteBodyTrack {
  constructor(
    private readonly bodyTrackServices: IBodyTrackServices = bodyTrackServicesGlobal
  ) {}

  public executeById = async (bodyTrackId: number): Promise<void> => {
    await this.bodyTrackServices.deleteEntity(bodyTrackId);
  };
}
