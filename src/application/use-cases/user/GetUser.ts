import { User } from '../../../domain/entities/User';
import { IGetUser } from './interface/IGetUser';
import { IUserServices } from '../../services/IUserServices';
import { returnUserServicesImplement } from '../../../infra/locator/returnUserServicesImplement';
export class GetUser implements IGetUser {
  constructor(
    private userServices: IUserServices = returnUserServicesImplement()
  ) {}

  public executeById = async (id: number): Promise<User> => {
    const user = await this.userServices.getUserById(id);
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    return user;
  };
  public executeByUsername = async (username: string): Promise<User|null> => {
    const user = await this.userServices.getUserByUsername(username);
    return user;
  };
  public getAll = async (): Promise<User[] | null> => {
    const users = await this.userServices.showListEntity();
    return users;
  };
}
