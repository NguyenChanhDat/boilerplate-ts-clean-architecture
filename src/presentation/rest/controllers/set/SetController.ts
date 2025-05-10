import { ISetController } from './ISetController';
import { Request, Response } from 'express';
import { CreateSet } from '@application/use-cases/set/CreateSet';
import { UpdateSet } from '@application/use-cases/set/UpdateSet';
import { DeleteSet } from '@application/use-cases/set/DeleteSet';
import { GetSet } from '@application/use-cases/set/GetSet';
import { SetApiStatus } from '@shared/constant/ApiStatus';
import { Set } from '@domain/entities/Set';

export class SetController implements ISetController {
  constructor(
    private readonly createSetUseCase: CreateSet,
    private readonly updateSetUseCase: UpdateSet,
    private readonly deleteSetUseCase: DeleteSet,
    private readonly getSetUseCase: GetSet
  ) {}

  public async create(req: Request, res: Response): Promise<void> {
    try {
      const result = await this.createSetUseCase.execute(req.body);
      res
        .status(SetApiStatus.OK.status)
        .send(SetApiStatus.OK.message + ` ${result}`);
    } catch (error) {
      console.error(error);
      res
        .status(SetApiStatus.INTERNAL_SERVER_ERROR.status)
        .send(SetApiStatus.INTERNAL_SERVER_ERROR.message);
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    try {
      await this.updateSetUseCase.execute(req.body);
      res.status(SetApiStatus.OK.status).send(SetApiStatus.OK.message);
    } catch (error) {
      console.error(error);
      res
        .status(SetApiStatus.INTERNAL_SERVER_ERROR.status)
        .send(SetApiStatus.INTERNAL_SERVER_ERROR.message);
    }
  }

  public async delete(req: Request, res: Response): Promise<void> {
    try {
      const setId = parseInt(req.params.id, 10);
      await this.deleteSetUseCase.executeById(setId);
      res.status(SetApiStatus.OK.status).send(SetApiStatus.OK.message);
    } catch (error) {
      console.error(error);
      res
        .status(SetApiStatus.INTERNAL_SERVER_ERROR.status)
        .send(SetApiStatus.INTERNAL_SERVER_ERROR.message);
    }
  }

  public async get(req: Request, res: Response): Promise<void> {
    try {
      const setData: Set | Set[] | null =
        'id' in req.query
          ? await this.getSetUseCase.getById(Number(req.query.id))
          : await this.getSetUseCase.getAll();
      res.status(SetApiStatus.OK.status);
      res.send(setData);
    } catch (error) {
      console.log(error);
      res.status(SetApiStatus.INTERNAL_SERVER_ERROR.status);
      res.send(SetApiStatus.INTERNAL_SERVER_ERROR.message);
    }
  }
}
