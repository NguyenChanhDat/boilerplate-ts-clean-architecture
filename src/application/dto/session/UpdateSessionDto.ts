import { Session } from '@domain/entities/Session';

export type UpdateSessionDto = Omit<Session, 'id' | 'date'>;
