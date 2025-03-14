import { IDeleteUser } from './interface/IDeleteUser';
import { IUserServices } from '../../services/IUserServices';
import { userServicesGlobal } from '@infra/locator/UserServicesGlobal';

export class DeleteUser implements IDeleteUser {
  constructor(
    private readonly userServices: IUserServices = userServicesGlobal
  ) {}

  public executeById = async (userId: number): Promise<number> => {
    const userById = await this.userServices.getUserById(userId);
    if (!userById) {
      throw new Error();
    }
    await this.userServices.deleteEntity(userId);
    return userId;
  };
}
