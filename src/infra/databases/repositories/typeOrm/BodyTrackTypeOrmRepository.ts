import { IBodyTrackRepository } from '../../../../domain/repositories/IBodyTrackRepository';
import { BodyTrack } from '../../../../domain/entities/BodyTrack';
import { BodyTracksModel } from '@infra/databases/models/BodyTracksModel';
import { appDataSource } from '@infra/databases/dataSource/BootstrapTypeOrm';
import { Repository } from 'typeorm';

export class BodyTrackTypeOrmRepository implements IBodyTrackRepository {
  constructor(
    private readonly repository: Repository<BodyTrack> = appDataSource.getRepository(
      BodyTracksModel
    )
  ) {}

  async createEntity(bodyTrack: BodyTrack): Promise<void> {
    await this.repository.save(bodyTrack);
  }

  async updateEntity(
    bodyTrackId: number,
    bodyTrack: Partial<BodyTrack>
  ): Promise<void> {
    await this.repository.update(bodyTrackId, bodyTrack);
  }

  async deleteEntity(bodyTrackId: number): Promise<void> {
    await this.repository.delete(bodyTrackId);
  }

  async getEntityById(bodyTrackId: number): Promise<BodyTrack | null> {
    return await this.repository.findOne({ where: { id: bodyTrackId } });
  }

  async showListEntity(): Promise<BodyTrack[] | null> {
    return await this.repository.find();
  }
}
