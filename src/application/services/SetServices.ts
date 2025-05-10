import { CreateSetDto } from '../dto/set/CreateSetDto';
import { UpdateSetDto } from '../dto/set/UpdateSetDto';
import { ISetServices } from './interfaces/ISetServices';
import { setRepositoryGlobal } from '@infra/locator/repository/RepositoryGlobal';
import { ISetRepository } from '@domain/repositories/ISetRepository';
import { Set } from '@domain/entities/Set';

export class SetServices implements ISetServices {
  constructor(
    private readonly setRepository: ISetRepository = setRepositoryGlobal
  ) {}

  public createEntity = async (setInput: CreateSetDto): Promise<void> => {
    await this.setRepository.createEntity(setInput);
    return Promise.resolve();
  };

  public updateEntity = async (
    setId: number,
    updateInfo: UpdateSetDto
  ): Promise<void> => {
    await this.setRepository.updateEntity(setId, updateInfo);
    return Promise.resolve();
  };

  public deleteEntity = async (setId: number): Promise<void> => {
    await this.setRepository.deleteEntity(setId);
    return Promise.resolve();
  };

  public getEntityById = async (setId: number): Promise<Set | null> => {
    return await this.setRepository.getEntityById(setId);
  };

  public showListEntity = async (): Promise<Set[] | null> => {
    return await this.setRepository.showListEntity();
  };
}
