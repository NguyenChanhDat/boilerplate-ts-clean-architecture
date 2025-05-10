import {
  CreateExercise,
  DeleteExercise,
  GetExercise,
  UpdateExercise,
} from '../../../application/use-cases/exercise/ExerciseUseCaseExportDir';
import { ICreateExercise } from '../../../application/use-cases/exercise/interfaces/ICreateExercise';
import { IDeleteExercise } from '../../../application/use-cases/exercise/interfaces/IDeleteExercise';
import { IGetExercise } from '../../../application/use-cases/exercise/interfaces/IGetExercise';
import { IUpdateExercise } from '../../../application/use-cases/exercise/interfaces/IUpdateExercise';

export const createExerciseGlobal: ICreateExercise = new CreateExercise();
export const deleteExerciseGlobal: IDeleteExercise = new DeleteExercise();
export const getExerciseGlobal: IGetExercise = new GetExercise();
export const updateExerciseGlobal: IUpdateExercise = new UpdateExercise();
