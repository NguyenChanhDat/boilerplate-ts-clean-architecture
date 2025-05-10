import { CreateBodyTrackDto } from '../dto/bodyTrack/CreateBodyTrackDto';
import { UpdateBodyTrackDto } from '../dto/bodyTrack/UpdateBodyTrackDto';
import { IBodyTrackServices } from './interfaces/IBodyTrackServices';
import { bodyTrackRepositoryGlobal } from '@infra/locator/repository/RepositoryGlobal';
import { IBodyTrackRepository } from '@domain/repositories/IBodyTrackRepository';
import { BodyTrack } from '@domain/entities/BodyTrack';

export class BodyTrackServices implements IBodyTrackServices {
  constructor(
    private readonly bodyTrackRepository: IBodyTrackRepository = bodyTrackRepositoryGlobal
  ) {}

  public createEntity = async (
    bodyTrackInput: CreateBodyTrackDto
  ): Promise<void> => {
    await this.bodyTrackRepository.createEntity(bodyTrackInput);
  };

  public updateEntity = async (
    bodyTrackId: number,
    updateInfo: UpdateBodyTrackDto
  ): Promise<void> => {
    await this.bodyTrackRepository.updateEntity(bodyTrackId, updateInfo);
  };

  public deleteEntity = async (bodyTrackId: number): Promise<void> => {
    await this.bodyTrackRepository.deleteEntity(bodyTrackId);
  };

  public getEntityById = async (
    bodyTrackId: number
  ): Promise<BodyTrack | null> => {
    return await this.bodyTrackRepository.getEntityById(bodyTrackId);
  };

  public showListEntity = async (): Promise<BodyTrack[] | null> => {
    return await this.bodyTrackRepository.showListEntity();
  };
}
