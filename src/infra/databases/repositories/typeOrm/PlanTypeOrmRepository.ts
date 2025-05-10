import { IPlanRepository } from '../../../../domain/repositories/IPlanRepository';
import { Plan } from '../../../../domain/entities/Plan';
import { PlanModel } from '@infra/databases/models/PlanModel';
import { appDataSource } from '@infra/databases/dataSource/BootstrapTypeOrm';
import { Repository } from 'typeorm';

export class PlanTypeOrmRepository implements IPlanRepository {
  constructor(
    private readonly repository: Repository<Plan> = appDataSource.getRepository(
      PlanModel
    )
  ) {}

  async createEntity(plan: Plan): Promise<void> {
    await this.repository.save(plan);
  }

  async updateEntity(planId: number, plan: Partial<Plan>): Promise<void> {
    await this.repository.update(planId, plan);
  }

  async deleteEntity(planId: number): Promise<void> {
    await this.repository.delete(planId);
  }

  async getEntityById(planId: number): Promise<Plan | null> {
    const plan = await this.repository.findOne({ where: { id: planId } });
    return plan;
  }

  async showListEntity(): Promise<Plan[] | null> {
    return await this.repository.find();
  }

  async getByUserId(userId: number): Promise<Plan[] | null> {
    return await this.repository.find({ where: { userId } });
  }
}
