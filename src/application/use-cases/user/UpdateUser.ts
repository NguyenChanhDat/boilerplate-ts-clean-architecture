import { IUpdateUser } from './interface/IUpdateUser';
import { IUserServices } from '../../services/interfaces/IUserServices';
import { userServicesGlobal } from '@infra/locator/services/UserServicesGlobal';
import { IPasswordServices } from '@application/services/IPasswordServices';
import { passwordServicesGlobal } from '@infra/locator/services/PasswordServicesGlobal';
import { User } from '@domain/entities/User';

export class UpdateUser implements IUpdateUser {
  constructor(
    private readonly userServices: IUserServices = userServicesGlobal,
    private readonly passwordServices: IPasswordServices = passwordServicesGlobal
  ) {}
  public execute = async (inforInput: User): Promise<User> => {
    const userById = await this.userServices.getUserById(inforInput.id);
    if (!userById) {
      throw new Error();
    }
    inforInput.password = await this.returnPasswordHashed(inforInput.password);
    await this.userServices.updateEntity(inforInput.id, inforInput);
    return inforInput;
  };

  private returnPasswordHashed = async (
    passwordInput: string
  ): Promise<string> => {
    return await this.passwordServices.hashPassword(passwordInput);
  };
}
