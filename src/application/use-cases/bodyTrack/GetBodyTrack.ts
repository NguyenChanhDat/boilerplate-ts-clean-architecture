import { BodyTrack } from '@domain/entities/BodyTrack';
import { IGetBodyTrack } from './interfaces/IGetBodyTrack';
import { bodyTrackServicesGlobal } from '@infra/locator/services/BodyTrackServicesGlobal';
import { IBodyTrackServices } from '@application/services/interfaces/IBodyTrackServices';

export class GetBodyTrack implements IGetBodyTrack {
  constructor(
    private readonly bodyTrackServices: IBodyTrackServices = bodyTrackServicesGlobal
  ) {}

  public getAll = async (): Promise<BodyTrack[] | null> => {
    return await this.bodyTrackServices.showListEntity();
  };

  public getById = async (id: number): Promise<BodyTrack | null> => {
    return await this.bodyTrackServices.getEntityById(id);
  };
}
