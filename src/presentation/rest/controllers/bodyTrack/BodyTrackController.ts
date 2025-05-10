import { CreateBodyTrackDto } from '../../../../application/dto/bodyTrack/CreateBodyTrackDto';
import { BodyTrack } from '../../../../domain/entities/BodyTrack';
import { BodyTrackApiStatus } from '../../../../shared/constant/ApiStatus';
import { IBodyTrackController } from './IBodyTrackController';
import { Response, Request } from 'express';
import {
  ICreateBodyTrack,
  IGetBodyTrack,
  IUpdateBodyTrack,
  IDeleteBodyTrack,
} from '../../../../application/use-cases/bodyTrack/BodyTrackUseCaseExportDir';

import {
  createBodyTrackGlobal,
  getBodyTrackGlobal,
  updateBodyTrackGlobal,
  deleteBodyTrackGlobal,
} from '../../../../infra/locator/use-cases/BodyTrackUseCaseGlobal';

export class BodyTrackController implements IBodyTrackController {
  constructor(
    private readonly createBodyTrack: ICreateBodyTrack = createBodyTrackGlobal,
    private readonly getBodyTrack: IGetBodyTrack = getBodyTrackGlobal,
    private readonly updateBodyTrack: IUpdateBodyTrack = updateBodyTrackGlobal,
    private readonly deleteBodyTrack: IDeleteBodyTrack = deleteBodyTrackGlobal
  ) {}

  public create = async (req: Request, res: Response): Promise<void> => {
    try {
      const bodyTrackInput: CreateBodyTrackDto = req.body;
      await this.createBodyTrack.execute(bodyTrackInput);
      res
        .status(BodyTrackApiStatus.OK.status)
        .send(BodyTrackApiStatus.OK.message + ` ${bodyTrackInput}`);
    } catch (error) {
      console.error(error);
      res
        .status(BodyTrackApiStatus.INTERNAL_SERVER_ERROR.status)
        .send(BodyTrackApiStatus.INTERNAL_SERVER_ERROR.message);
    }
  };

  public update = async (req: Request, res: Response): Promise<void> => {
    try {
      const bodyTrackInfo: BodyTrack = req.body;
      await this.updateBodyTrack.execute(bodyTrackInfo);
      res
        .status(BodyTrackApiStatus.OK.status)
        .send(BodyTrackApiStatus.OK.message);
    } catch (error) {
      console.error(error);
      res
        .status(BodyTrackApiStatus.INTERNAL_SERVER_ERROR.status)
        .send(BodyTrackApiStatus.INTERNAL_SERVER_ERROR.message);
    }
  };

  public delete = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = Number(req.params.id);
      await this.deleteBodyTrack.executeById(id);
      res
        .status(BodyTrackApiStatus.OK.status)
        .send(BodyTrackApiStatus.OK.message);
    } catch (error) {
      console.error(error);
      res
        .status(BodyTrackApiStatus.INTERNAL_SERVER_ERROR.status)
        .send(BodyTrackApiStatus.INTERNAL_SERVER_ERROR.message);
    }
  };

  public get = async (req: Request, res: Response): Promise<void> => {
    try {
      const bodyTrackData: BodyTrack | BodyTrack[] | null =
        'id' in req.query
          ? await this.getBodyTrack.getById(Number(req.query.id))
          : await this.getBodyTrack.getAll();
      res.status(BodyTrackApiStatus.OK.status);
      res.send(bodyTrackData);
    } catch (error) {
      console.error(error);
      res
        .status(BodyTrackApiStatus.INTERNAL_SERVER_ERROR.status)
        .send(BodyTrackApiStatus.INTERNAL_SERVER_ERROR.message);
    }
  };
}
