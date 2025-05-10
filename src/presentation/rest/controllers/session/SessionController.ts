import { ISessionController } from './ISessionController';
import { Request, Response } from 'express';
import { CreateSession } from '@application/use-cases/session/CreateSession';
import { UpdateSession } from '@application/use-cases/session/UpdateSession';
import { DeleteSession } from '@application/use-cases/session/DeleteSession';
import { GetSession } from '@application/use-cases/session/GetSession';
import { SessionApiStatus } from '@shared/constant/ApiStatus';
import { Session } from '@domain/entities/Session';

export class SessionController implements ISessionController {
  constructor(
    private readonly createSessionUseCase: CreateSession,
    private readonly updateSessionUseCase: UpdateSession,
    private readonly deleteSessionUseCase: DeleteSession,
    private readonly getSessionUseCase: GetSession
  ) {}

  public async create(req: Request, res: Response): Promise<void> {
    try {
      const result = await this.createSessionUseCase.execute(req.body);
      res
        .status(SessionApiStatus.OK.status)
        .send(SessionApiStatus.OK.message + ` ${result}`);
    } catch (error) {
      console.error(error);
      res
        .status(SessionApiStatus.INTERNAL_SERVER_ERROR.status)
        .send(SessionApiStatus.INTERNAL_SERVER_ERROR.message);
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    try {
      const sessionId = parseInt(req.params.id, 10);
      await this.updateSessionUseCase.execute(sessionId, req.body);
      res.status(SessionApiStatus.OK.status).send(SessionApiStatus.OK.message);
    } catch (error) {
      res
        .status(SessionApiStatus.INTERNAL_SERVER_ERROR.status)
        .send(SessionApiStatus.INTERNAL_SERVER_ERROR.message);
    }
  }

  public async delete(req: Request, res: Response): Promise<void> {
    try {
      const sessionId = parseInt(req.params.id, 10);
      await this.deleteSessionUseCase.execute(sessionId);
      res.status(SessionApiStatus.OK.status).send(SessionApiStatus.OK.message);
    } catch (error) {
      res
        .status(SessionApiStatus.INTERNAL_SERVER_ERROR.status)
        .send(SessionApiStatus.INTERNAL_SERVER_ERROR.message);
    }
  }

  public get = async (req: Request, res: Response): Promise<void> => {
    try {
      let sessionData: Session | Session[] | null;

      switch (req.query.type) {
        case 'id':
          sessionData = await this.getSessionUseCase.getById(
            Number(req.query.id)
          );
          break;
        case 'planId':
          sessionData = await this.getSessionUseCase.getByPlanId(
            Number(req.query.planId)
          );
          break;
        case 'date':
          sessionData = await this.getSessionUseCase.getByDate(
            new Date(String(req.query.date))
          );
          break;
        default:
          sessionData = await this.getSessionUseCase.getAll();
          break;
      }
      res.status(SessionApiStatus.OK.status);

      res.send(sessionData);
    } catch (error) {
      console.error(error);
      res
        .status(SessionApiStatus.INTERNAL_SERVER_ERROR.status)
        .send(SessionApiStatus.INTERNAL_SERVER_ERROR.message);
    }
  };
}
