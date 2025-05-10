import { CreateExerciseDto } from '@application/dto/exercise/CreateExerciseDto';

export interface ICreateExercise {
  execute(exerciseInput: CreateExerciseDto): Promise<CreateExerciseDto>;
}
