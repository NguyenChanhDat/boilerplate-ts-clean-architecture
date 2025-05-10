import { Session } from '../entities/Session';
import { EntityRepository } from './EntityRepository';

export interface ISessionRepository extends EntityRepository<Session> {
  getByPlanId(planId: number): Promise<Session[] | null>;
  getByDate(date: Date): Promise<Session[] | null>;
}
