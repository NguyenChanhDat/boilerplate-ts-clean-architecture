import { ISetRepository } from '../../../../domain/repositories/ISetRepository';
import { Set } from '../../../../domain/entities/Set';
import { SetModel } from '@infra/databases/models/SetModel';
import { appDataSource } from '@infra/databases/dataSource/BootstrapTypeOrm';
import { Repository } from 'typeorm';

export class SetTypeOrmRepository implements ISetRepository {
  constructor(
    private readonly repository: Repository<Set> = appDataSource.getRepository(
      SetModel
    )
  ) {}

  async createEntity(set: Set): Promise<void> {
    await this.repository.save(set);
  }

  async updateEntity(setId: number, set: Partial<Set>): Promise<void> {
    await this.repository.update(setId, set);
  }

  async deleteEntity(setId: number): Promise<void> {
    await this.repository.delete(setId);
  }

  async getEntityById(setId: number): Promise<Set | null> {
    const set = await appDataSource
      .getRepository(SetModel)
      .findOne({ where: { id: setId } });
    return set;
  }

  async showListEntity(): Promise<Set[] | null> {
    return await this.repository.find();
  }

  async getExerciseBySessionId(sessionId: number): Promise<Set[]> {
    return await this.repository.findBy({ sessionId });
  }
}
