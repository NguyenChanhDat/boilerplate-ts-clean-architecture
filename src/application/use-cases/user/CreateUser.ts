import { CreateUserDto } from '../../dto/user/createUserDto';
import { ICreateUser } from './interface/ICreateUser';
import { IUserServices } from '../../services/interfaces/IUserServices';
import { userServicesGlobal } from '@infra/locator/services/UserServicesGlobal';
import { IPasswordServices } from '@application/services/IPasswordServices';
import { passwordServicesGlobal } from '@infra/locator/services/PasswordServicesGlobal';
import { MembershipTierEnum } from '@shared/enums/MembershipTierEnum';

export class CreateUser implements ICreateUser {
  constructor(
    private readonly userServices: IUserServices = userServicesGlobal,
    private passwordServices: IPasswordServices = passwordServicesGlobal
  ) {}
  private returnPasswordHashed = async (
    passwordInput: string
  ): Promise<string> => {
    return await this.passwordServices.hashPassword(passwordInput);
  };
  public execute = async (
    inputInfor: CreateUserDto
  ): Promise<Omit<CreateUserDto, 'password'>> => {
    const { username, password } = inputInfor;
    const passwordHashed = await this.returnPasswordHashed(password);

    const userToBeCreate: CreateUserDto = {
      username,
      password: passwordHashed,
      membershipTier: MembershipTierEnum.BASIC,
    };

    await this.userServices.createEntity(userToBeCreate);

    return {
      username,
      membershipTier: MembershipTierEnum.BASIC,
    };
  };
}
