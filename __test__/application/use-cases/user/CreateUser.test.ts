import { CreateUser } from '../../../../src/application/use-cases/user/CreateUser';
import { IUserServices } from '../../../../src/application/services/interfaces/IUserServices';
import { MembershipTierEnum } from '@shared/enums/MembershipTierEnum';

class MockUserServices implements IUserServices {
  getUserById = jest.fn();
  deleteEntity = jest.fn();
  createEntity = jest.fn();
  updateEntity = jest.fn();
  getUserByUsername = jest.fn();
  showListEntity = jest.fn();
}

describe('CreateUser', () => {
  let createUser: CreateUser;
  let mockUserServices: MockUserServices;

  beforeEach(() => {
    mockUserServices = new MockUserServices();
    createUser = new CreateUser(mockUserServices);
  });

  it('should create a new user', async () => {
    const userData = {
      username: 'testuser',
      password: 'password',
      membershipTier: MembershipTierEnum.BASIC,
    };
    const createdUser = { id: 1, ...userData };
    mockUserServices.createEntity.mockResolvedValue(createdUser);

    await createUser.execute(userData);

    expect(mockUserServices.createEntity).toHaveBeenCalled();
    const calledArg = mockUserServices.createEntity.mock.calls[0][0];

    expect(calledArg.username).toBe(userData.username);
    expect(calledArg.membershipTier).toBe(userData.membershipTier);
    expect(calledArg.password).not.toBe(userData.password); // password should be hashed
  });
});
