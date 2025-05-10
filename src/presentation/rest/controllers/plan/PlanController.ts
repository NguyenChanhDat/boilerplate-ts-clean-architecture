import { CreatePlanDto } from '@application/dto/plan/CreatePlanDto';
import { Plan } from '@domain/entities/Plan';
import { PlanApiStatus } from '@shared/constant/ApiStatus';
import { IPlanController } from './IPlanController';
import { Response, Request } from 'express';
import { PlanNotFoundError } from '@shared/constant/PlanNotFoundError';
import {
  ICreatePlan,
  IDeletePlan,
  IGetPlan,
  IUpdatePlan,
} from '../../../../application/use-cases/plan/PlanUseCaseExportDir';
import {
  createPlanGlobal,
  deletePlanGlobal,
  getPlanGlobal,
  updatePlanGlobal,
} from '../../../../infra/locator/use-cases/PlanUseCaseGlobal';

export class PlanController implements IPlanController {
  constructor(
    private readonly createPlan: ICreatePlan = createPlanGlobal,
    private readonly deletePlan: IDeletePlan = deletePlanGlobal,
    private readonly getPlan: IGetPlan = getPlanGlobal,
    private readonly updatePlan: IUpdatePlan = updatePlanGlobal
  ) {}
  public create = async (req: Request, res: Response): Promise<void> => {
    try {
      const PlanInputInfor: CreatePlanDto = req.body;
      const PlanCreated = await this.createPlan.execute(PlanInputInfor);
      res.status(PlanApiStatus.OK.status);
      res.send(PlanCreated + PlanApiStatus.OK.message);
    } catch (error) {
      console.log(error);
      res.status(PlanApiStatus.INTERNAL_SERVER_ERROR.status);
      res.send(PlanApiStatus.INTERNAL_SERVER_ERROR.message);
    }
  };
  public update = async (req: Request, res: Response): Promise<void> => {
    try {
      const PlanInfor: Plan = req.body;
      await this.updatePlan.execute(PlanInfor);
      res.status(PlanApiStatus.OK.status);
      res.send(PlanApiStatus.OK);
    } catch (error) {
      console.log(error);

      if (error instanceof PlanNotFoundError) {
        res.status(error.status);
        res.send(error.message);
        return;
      }
      res.status(PlanApiStatus.INTERNAL_SERVER_ERROR.status);
      res.send(PlanApiStatus.INTERNAL_SERVER_ERROR.message);
    }
  };
  public delete = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = Number(req.params.id);
      await this.deletePlan.executeById(id);
      res.status(PlanApiStatus.OK.status);
      res.send(PlanApiStatus.OK);
    } catch (error) {
      if (error instanceof PlanNotFoundError) {
        res.status(error.status);
        res.send(error.message);
        return;
      }
      res.status(PlanApiStatus.INTERNAL_SERVER_ERROR.status);
      res.send(PlanApiStatus.INTERNAL_SERVER_ERROR.message);
    }
  };
  public get = async (req: Request, res: Response): Promise<void> => {
    try {
      const PlanByInput: Plan | Plan[] | null =
        'id' in req.query
          ? await this.getPlan.getById(Number(req.query.id))
          : 'userId' in req.query
          ? await this.getPlan.getByUserId(Number(req.query.userId))
          : await this.getPlan.getAll();
      res.status(PlanApiStatus.OK.status);
      res.send(PlanByInput);
    } catch (error) {
      console.log(error);

      if (error instanceof PlanNotFoundError) {
        res.status(error.status);
        res.send(error.message);
        return;
      }
      res.status(PlanApiStatus.INTERNAL_SERVER_ERROR.status);
      res.send(PlanApiStatus.INTERNAL_SERVER_ERROR.message);
    }
  };
}
