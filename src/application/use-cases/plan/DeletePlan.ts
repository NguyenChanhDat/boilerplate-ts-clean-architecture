import { IPlanServices } from '@application/services/interfaces/IPlanServices';
import { IDeletePlan } from './interfaces/IDeletePlan';
import { planServicesGlobal } from '@infra/locator/services/PlanServicesGlobal';

export class DeletePlan implements IDeletePlan {
  constructor(
    private readonly planServices: IPlanServices = planServicesGlobal
  ) {}

  public executeById = async (planId: number): Promise<void> => {
    await this.planServices.deleteEntity(planId);
  };
}
