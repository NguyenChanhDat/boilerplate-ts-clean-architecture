import { CreateSessionDto } from '@application/dto/session/CreateSessionDto';

export interface ICreateSession {
  execute(input: CreateSessionDto): Promise<CreateSessionDto>;
}
