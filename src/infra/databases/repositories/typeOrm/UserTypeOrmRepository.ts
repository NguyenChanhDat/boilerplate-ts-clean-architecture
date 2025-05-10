import { IUserRepository } from '../../../../domain/repositories/IUserRepository';
import { User } from '../../../../domain/entities/User';
import { UpdateUserDto } from '../../../../application/dto/user/updateUserDto';
import { UserModel } from '@infra/databases/models/UserModel';
import { appDataSource } from '@infra/databases/dataSource/BootstrapTypeOrm';
import { Repository } from 'typeorm';

export class UserTypeOrmRepository implements IUserRepository {
  constructor(
    private readonly repository: Repository<User> = appDataSource.getRepository(
      UserModel
    )
  ) {}

  async createEntity(user: User): Promise<void> {
    await this.repository.save(user);
  }

  async updateEntity(userId: number, inforInput: User): Promise<void> {
    const { id, ...rest } = inforInput;
    const updateInfor: UpdateUserDto = rest;
    await this.repository.update(userId, updateInfor);
  }

  async deleteEntity(userId: number): Promise<void> {
    await this.repository.delete(userId);
    return;
  }

  async getEntityById(userId: number): Promise<User | null> {
    const user = await this.repository.findOne({ where: { id: userId } });
    return user;
  }

  async showListEntity(): Promise<User[] | null> {
    return await this.repository.find();
  }

  async getByUsername(username: string): Promise<User | null> {
    const user = await this.repository.findOne({ where: { username } });
    return user;
  }
}
