import { CreatePlanDto } from '@application/dto/plan/CreatePlanDto';

export interface ICreatePlan {
  execute(planInput: CreatePlanDto): Promise<CreatePlanDto>;
}
