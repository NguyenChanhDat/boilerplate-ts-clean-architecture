import { IUpdateSession } from './interfaces/IUpdateSession';
import { ISessionServices } from '@application/services/interfaces/ISessionServices';
import { sessionServicesGlobal } from '@infra/locator/services/SessionServicesGlobal';
import { UpdateSessionDto } from '@application/dto/session/UpdateSessionDto';
import { Session } from '@domain/entities/Session';

export class UpdateSession implements IUpdateSession {
  constructor(
    private readonly sessionServices: ISessionServices = sessionServicesGlobal
  ) {}

  public async execute(
    sessionId: number,
    input: UpdateSessionDto
  ): Promise<Session> {
    const session = await this.sessionServices.getEntityById(sessionId);
    if (!session) {
      throw new Error('Session not found');
    }
    await this.sessionServices.updateEntity(sessionId, input);
    return { ...session, ...input };
  }
}
