import { Session } from '@domain/entities/Session';

export interface IGetSession {
  getAll(): Promise<Session[] | null>;
  getById(sessionId: number): Promise<Session | null>;
  getByPlanId(planId: number): Promise<Session[] | null>;
  getByDate(date: Date): Promise<Session[] | null>;
}
