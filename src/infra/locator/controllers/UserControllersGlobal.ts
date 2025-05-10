import { IUserController } from '../../../presentation/rest/controllers/user/IUserControllers';
import { UserController } from '../../../presentation/rest/controllers/user/UserController';

export const userControllersGlobal: IUserController = new UserController();
