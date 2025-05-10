import { ISessionRepository } from '@domain/repositories/ISessionRepository';
import { Session } from '@domain/entities/Session';
import { Repository } from 'typeorm';
import { SessionModel } from '@infra/databases/models/SessionModel';
import { appDataSource } from '@infra/databases/dataSource/BootstrapTypeOrm';

export class SessionTypeOrmRepository implements ISessionRepository {
  constructor(
    private readonly repository: Repository<Session> = appDataSource.getRepository(
      SessionModel
    )
  ) {}

  public async createEntity(session: Session): Promise<void> {
    await this.repository.save(session);
  }

  public async updateEntity(
    sessionId: number,
    session: Partial<Session>
  ): Promise<void> {
    await this.repository.update(sessionId, session);
  }

  public async deleteEntity(sessionId: number): Promise<void> {
    await this.repository.delete(sessionId);
  }

  public async getEntityById(sessionId: number): Promise<Session | null> {
    return await this.repository.findOneBy({ id: sessionId });
  }

  public async showListEntity(): Promise<Session[] | null> {
    return await this.repository.find();
  }

  public async getByPlanId(planId: number): Promise<Session[] | null> {
    return await this.repository.find({ where: { planId } });
  }

  public async getByDate(date: Date): Promise<Session[] | null> {
    return await this.repository.find({ where: { date } });
  }
}
