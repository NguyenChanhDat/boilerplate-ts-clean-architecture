import {
  CreateSet,
  DeleteSet,
  GetSet,
  UpdateSet,
} from '../../../application/use-cases/set/SetUseCaseExportDir';
import { ICreateSet } from '../../../application/use-cases/set/interfaces/ICreateSet';
import { IDeleteSet } from '../../../application/use-cases/set/interfaces/IDeleteSet';
import { IGetSet } from '../../../application/use-cases/set/interfaces/IGetSet';
import { IUpdateSet } from '../../../application/use-cases/set/interfaces/IUpdateSet';

export const createSetGlobal: ICreateSet = new CreateSet();
export const deleteSetGlobal: IDeleteSet = new DeleteSet();
export const getSetGlobal: IGetSet = new GetSet();
export const updateSetGlobal: IUpdateSet = new UpdateSet();
