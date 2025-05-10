import { User } from '@domain/entities/User';
import { IGetUser } from './interface/IGetUser';
import { IUserServices } from '../../services/interfaces/IUserServices';
import { userServicesGlobal } from '@infra/locator/services/UserServicesGlobal';

export class GetUser implements IGetUser {
  constructor(
    private readonly userServices: IUserServices = userServicesGlobal
  ) {}

  public executeById = async (id: number): Promise<User> => {
    const user = await this.userServices.getUserById(id);
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    return user;
  };
  public executeByUsername = async (username: string): Promise<User | null> => {
    const user = await this.userServices.getUserByUsername(username);
    return user;
  };
  public getAll = async (): Promise<User[] | null> => {
    const users = await this.userServices.showListEntity();
    return users;
  };
}
