import { CreateUserDto } from '../../../../application/dto/user/createUserDto';
import { User } from '../../../../domain/entities/User';
import { UserApiStatus } from '../../../../shared/constant/ApiStatus';
import { IUserController } from './IUserControllers';
import { Response, Request } from 'express';
import { UserNotFoundError } from '../../../../shared/constant/UserNotFoundError';
import {
  ICreateUser,
  IDeleteUser,
  IGetUser,
  IUpdateUser,
} from '../../../../application/use-cases/user/UserUseCaseExportDir';
import {
  returnCreateUser,
  returnDeleteUser,
  returnGetUser,
  returnUpdateUser,
} from '../../../../infra/locator/returnUserUseCase';

export class UserController implements IUserController {
  constructor(
    private readonly createUser: ICreateUser = returnCreateUser(),
    private readonly deleteUser: IDeleteUser = returnDeleteUser(),
    private readonly getUser: IGetUser = returnGetUser(),
    private readonly updateUser: IUpdateUser = returnUpdateUser()
  ) {}
  public create = async (req: Request, res: Response): Promise<void> => {
    try {
      const userInputInfor: CreateUserDto = req.body;
      const userCreated: User = await this.createUser.execute(userInputInfor);
      res.status(UserApiStatus.OK.status);
      res.send(userCreated + UserApiStatus.OK.message);
    } catch (error) {
      console.log(error);
      res.status(UserApiStatus.INTERNAL_SERVER_ERROR.status);
      res.send(UserApiStatus.INTERNAL_SERVER_ERROR.message);
    }
  };
  public update = async (req: Request, res: Response): Promise<void> => {
    try {
      const userInfor: User = req.body;
      const userUpdated: User = await this.updateUser.execute(userInfor);
      res.status(UserApiStatus.OK.status);
      res.send(UserApiStatus.OK + ' ' + userUpdated);
    } catch (error) {
      console.log(error);

      if (error instanceof UserNotFoundError) {
        res.status(error.status);
        res.send(error.message);
        return;
      }
      res.status(UserApiStatus.INTERNAL_SERVER_ERROR.status);
      res.send(UserApiStatus.INTERNAL_SERVER_ERROR.message);
    }
  };
  public delete = async (req: Request, res: Response): Promise<void> => {
    try {
      await this.deleteUser.executeById(req.body.id);
      res.status(UserApiStatus.OK.status);
      res.send(UserApiStatus.OK);
    } catch (error) {
      if (error instanceof UserNotFoundError) {
        res.status(error.status);
        res.send(error.message);
        return;
      }
      res.status(UserApiStatus.INTERNAL_SERVER_ERROR.status);
      res.send(UserApiStatus.INTERNAL_SERVER_ERROR.message);
    }
  };
  public get = async (req: Request, res: Response): Promise<void> => {
    try {
      const userByInput: User | User[] =
        'id' in req.query
          ? await this.getUser.executeById(Number(req.query.id))
          : 'username' in req.query
          ? await this.getUser.executeByUsername(String(req.query.username))
          : await this.getUser.getAll();
      res.status(UserApiStatus.OK.status);
      res.send(userByInput);
    } catch (error) {
      console.log(error);

      if (error instanceof UserNotFoundError) {
        res.status(error.status);
        res.send(error.message);
        return;
      }
      res.status(UserApiStatus.INTERNAL_SERVER_ERROR.status);
      res.send(UserApiStatus.INTERNAL_SERVER_ERROR.message);
    }
  };
}
