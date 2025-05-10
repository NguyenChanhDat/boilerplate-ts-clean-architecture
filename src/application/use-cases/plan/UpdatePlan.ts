import { IUpdatePlan } from './interfaces/IUpdatePlan';
import { planServicesGlobal } from '@infra/locator/services/PlanServicesGlobal';
import { IPlanServices } from '@application/services/interfaces/IPlanServices';
import { Plan } from '@domain/entities/Plan';

export class UpdatePlan implements IUpdatePlan {
  constructor(
    private readonly planServices: IPlanServices = planServicesGlobal
  ) {}

  public execute = async (planInfo: Plan): Promise<Plan> => {
    const planById = await this.planServices.getEntityById(planInfo.id);
    if (!planById) {
      throw new Error(`Plan with id ${planInfo.id} not found`);
    }
    await this.planServices.updateEntity(planInfo.id, planInfo);
    return planInfo;
  };
}
