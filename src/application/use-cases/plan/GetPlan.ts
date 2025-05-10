import { Plan } from '@domain/entities/Plan';
import { IGetPlan } from './interfaces/IGetPlan';
import { planServicesGlobal } from '@infra/locator/services/PlanServicesGlobal';
import { IPlanServices } from '@application/services/interfaces/IPlanServices';

export class GetPlan implements IGetPlan {
  constructor(
    private readonly planServices: IPlanServices = planServicesGlobal
  ) {}

  public getAll = async (): Promise<Plan[] | null> => {
    return await this.planServices.showListEntity();
  };

  public getById = async (id: number): Promise<Plan | null> => {
    return await this.planServices.getEntityById(id);
  };

  public getByUserId(userId: number): Promise<Plan[] | null> {
    return this.planServices.getByUserId(userId);
  }
}
