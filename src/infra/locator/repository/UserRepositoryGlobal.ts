import { UserTypeOrmRepository } from '@infra/databases/repositories/typeOrm/UserTypeOrmRepository';
import { IUserRepository } from '../../../domain/repositories/IUserRepository';

export const userRepositoryGlobal: IUserRepository =
  new UserTypeOrmRepository();
