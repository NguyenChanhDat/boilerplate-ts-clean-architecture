import { CreatePlanDto } from '@application/dto/plan/CreatePlanDto';
import { ICreatePlan } from './interfaces/ICreatePlan';
import { planServicesGlobal } from '@infra/locator/services/PlanServicesGlobal';
import { IPlanServices } from '@application/services/interfaces/IPlanServices';

export class CreatePlan implements ICreatePlan {
  constructor(
    private readonly planServices: IPlanServices = planServicesGlobal
  ) {}

  public execute = async (planInput: CreatePlanDto): Promise<CreatePlanDto> => {
    await this.planServices.createEntity(planInput);
    return planInput;
  };
}
