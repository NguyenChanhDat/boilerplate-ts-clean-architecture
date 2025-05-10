import { Session } from '@domain/entities/Session';

export type CreateSessionDto = Omit<Session, 'id'>;
