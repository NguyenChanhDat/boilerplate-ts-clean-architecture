import {
  CreatePlan,
  DeletePlan,
  GetPlan,
  UpdatePlan,
} from '../../../application/use-cases/plan/PlanUseCaseExportDir';
import { ICreatePlan } from '../../../application/use-cases/plan/interfaces/ICreatePlan';
import { IDeletePlan } from '../../../application/use-cases/plan/interfaces/IDeletePlan';
import { IGetPlan } from '../../../application/use-cases/plan/interfaces/IGetPlan';
import { IUpdatePlan } from '../../../application/use-cases/plan/interfaces/IUpdatePlan';

export const createPlanGlobal: ICreatePlan = new CreatePlan();
export const deletePlanGlobal: IDeletePlan = new DeletePlan();
export const getPlanGlobal: IGetPlan = new GetPlan();
export const updatePlanGlobal: IUpdatePlan = new UpdatePlan();
