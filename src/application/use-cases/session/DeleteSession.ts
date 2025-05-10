import { IDeleteSession } from './interfaces/IDeleteSession';
import { ISessionServices } from '@application/services/interfaces/ISessionServices';
import { sessionServicesGlobal } from '@infra/locator/services/SessionServicesGlobal';

export class DeleteSession implements IDeleteSession {
  constructor(
    private readonly sessionServices: ISessionServices = sessionServicesGlobal
  ) {}

  public async execute(sessionId: number): Promise<void> {
    const session = await this.sessionServices.getEntityById(sessionId);
    if (!session) {
      throw new Error('Session not found');
    }
    await this.sessionServices.deleteEntity(sessionId);
  }
}
