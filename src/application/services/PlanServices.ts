import { CreatePlanDto } from '../dto/plan/CreatePlanDto';
import { UpdatePlanDto } from '../dto/plan/UpdatePlanDto';
import { IPlanServices } from './interfaces/IPlanServices';
import { planRepositoryGlobal } from '@infra/locator/repository/RepositoryGlobal';
import { IPlanRepository } from '@domain/repositories/IPlanRepository';
import { Plan } from '@domain/entities/Plan';

export class PlanServices implements IPlanServices {
  constructor(
    private readonly planRepository: IPlanRepository = planRepositoryGlobal
  ) {}

  public createEntity = async (planInput: CreatePlanDto): Promise<void> => {
    await this.planRepository.createEntity(planInput);
    return Promise.resolve();
  };

  public updateEntity = async (
    planId: number,
    updateInfo: UpdatePlanDto
  ): Promise<void> => {
    await this.planRepository.updateEntity(planId, updateInfo);
    return Promise.resolve();
  };

  public getByUserId = async (userId: number): Promise<Plan[] | null> => {
    return await this.planRepository.getByUserId(userId);
  };

  public deleteEntity = async (planId: number): Promise<void> => {
    return this.planRepository.deleteEntity(planId);
  };

  public getEntityById = async (planId: number): Promise<Plan | null> => {
    return this.planRepository.getEntityById(planId);
  };

  public showListEntity = async (): Promise<Plan[] | null> => {
    return this.planRepository.showListEntity();
  };
}
