import { ICreateSession } from './interfaces/ICreateSession';
import { ISessionServices } from '@application/services/interfaces/ISessionServices';
import { sessionServicesGlobal } from '@infra/locator/services/SessionServicesGlobal';
import { CreateSessionDto } from '@application/dto/session/CreateSessionDto';

export class CreateSession implements ICreateSession {
  constructor(
    private readonly sessionServices: ISessionServices = sessionServicesGlobal
  ) {}

  public async execute(input: CreateSessionDto): Promise<CreateSessionDto> {
    const session = { ...input };
    await this.sessionServices.createEntity(session);
    return session;
  }
}
