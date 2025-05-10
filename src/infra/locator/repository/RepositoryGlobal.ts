import { IBodyTrackRepository } from '../../../domain/repositories/IBodyTrackRepository';
import { BodyTrackTypeOrmRepository } from '../../databases/repositories/typeOrm/BodyTrackTypeOrmRepository';

import { IExerciseRepository } from '../../../domain/repositories/IExerciseRepository';
import { ExerciseTypeOrmRepository } from '../../databases/repositories/typeOrm/ExerciseTypeOrmRepository';

import { IPlanRepository } from '../../../domain/repositories/IPlanRepository';
import { PlanTypeOrmRepository } from '../../databases/repositories/typeOrm/PlanTypeOrmRepository';

import { ISetRepository } from '../../../domain/repositories/ISetRepository';
import { SetTypeOrmRepository } from '../../databases/repositories/typeOrm/SetTypeOrmRepository';

import { IUserRepository } from '../../../domain/repositories/IUserRepository';
import { UserTypeOrmRepository } from '../../databases/repositories/typeOrm/UserTypeOrmRepository';
import { ISessionRepository } from '@domain/repositories/ISessionRepository';
import { SessionTypeOrmRepository } from '@infra/databases/repositories/typeOrm/SessionTypeOrmRepository';

export const bodyTrackRepositoryGlobal: IBodyTrackRepository =
  new BodyTrackTypeOrmRepository();
export const exerciseRepositoryGlobal: IExerciseRepository =
  new ExerciseTypeOrmRepository();
export const planRepositoryGlobal: IPlanRepository =
  new PlanTypeOrmRepository();
export const setRepositoryGlobal: ISetRepository = new SetTypeOrmRepository();
export const userRepositoryGlobal: IUserRepository =
  new UserTypeOrmRepository();
export const sessionRepositoryGlobal: ISessionRepository =
  new SessionTypeOrmRepository();
