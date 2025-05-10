import {
  CreateBodyTrack,
  GetBodyTrack,
  UpdateBodyTrack,
  DeleteBodyTrack,
} from '../../../application/use-cases/bodyTrack/BodyTrackUseCaseExportDir';
import { ICreateBodyTrack } from '../../../application/use-cases/bodyTrack/interfaces/ICreateBodyTrack';
import { IGetBodyTrack } from '../../../application/use-cases/bodyTrack/interfaces/IGetBodyTrack';
import { IUpdateBodyTrack } from '../../../application/use-cases/bodyTrack/interfaces/IUpdateBodyTrack';
import { IDeleteBodyTrack } from '../../../application/use-cases/bodyTrack/interfaces/IDeleteBodyTrack';

export const createBodyTrackGlobal: ICreateBodyTrack = new CreateBodyTrack();
export const getBodyTrackGlobal: IGetBodyTrack = new GetBodyTrack();
export const updateBodyTrackGlobal: IUpdateBodyTrack = new UpdateBodyTrack();
export const deleteBodyTrackGlobal: IDeleteBodyTrack = new DeleteBodyTrack();
