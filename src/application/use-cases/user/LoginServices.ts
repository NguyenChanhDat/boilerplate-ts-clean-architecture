import { IPasswordServices } from '../../services/IPasswordServices';
import { ILogin } from './interface/ILogin';
import { IUserServices } from '../../services/interfaces/IUserServices';
import { userServicesGlobal } from '@infra/locator/services/UserServicesGlobal';
import { passwordServicesGlobal } from '@infra/locator/services/PasswordServicesGlobal';

export class LoginServices implements ILogin {
  constructor(
    private readonly userServices: IUserServices = userServicesGlobal,
    private readonly passwordServices: IPasswordServices = passwordServicesGlobal
  ) {}

  private getUserPasswordByUsername = async (
    username: string
  ): Promise<string> => {
    try {
      const userByUsername = await this.userServices.getUserByUsername(
        username
      );
      return userByUsername?.password || '';
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  };

  public validatePassword = async (
    username: string,
    inputPassword: string
  ): Promise<boolean> => {
    try {
      const userPassword = await this.getUserPasswordByUsername(username);
      const compareResult = this.passwordServices.validatePassword(
        inputPassword,
        userPassword
      );
      return compareResult;
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  };
}
