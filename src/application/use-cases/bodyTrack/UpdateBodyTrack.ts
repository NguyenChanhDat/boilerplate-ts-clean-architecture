import { IUpdateBodyTrack } from './interfaces/IUpdateBodyTrack';
import { bodyTrackServicesGlobal } from '@infra/locator/services/BodyTrackServicesGlobal';
import { IBodyTrackServices } from '@application/services/interfaces/IBodyTrackServices';
import { BodyTrack } from '@domain/entities/BodyTrack';

export class UpdateBodyTrack implements IUpdateBodyTrack {
  constructor(
    private readonly bodyTrackServices: IBodyTrackServices = bodyTrackServicesGlobal
  ) {}

  public execute = async (bodyTrackInfo: BodyTrack): Promise<BodyTrack> => {
    const bodyTrackById = await this.bodyTrackServices.getEntityById(
      bodyTrackInfo.id
    );
    if (!bodyTrackById) {
      throw new Error(`BodyTrack with id ${bodyTrackInfo.id} not found`);
    }
    await this.bodyTrackServices.updateEntity(bodyTrackInfo.id, bodyTrackInfo);
    return bodyTrackInfo;
  };
}
