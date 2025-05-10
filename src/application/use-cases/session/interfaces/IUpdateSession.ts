import { UpdateSessionDto } from '@application/dto/session/UpdateSessionDto';
import { Session } from '@domain/entities/Session';

export interface IUpdateSession {
  execute(sessionId: number, input: UpdateSessionDto): Promise<Session>;
}
