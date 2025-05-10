import { CreateExerciseDto } from '@application/dto/exercise/CreateExerciseDto';
import { ICreateExercise } from './interfaces/ICreateExercise';
import { exerciseServicesGlobal } from '@infra/locator/services/ExerciseServicesGlobal';
import { IExerciseServices } from '@application/services/interfaces/IExerciseServices';

export class CreateExercise implements ICreateExercise {
  constructor(
    private readonly exerciseServices: IExerciseServices = exerciseServicesGlobal
  ) {}

  public execute = async (
    exerciseInput: CreateExerciseDto
  ): Promise<CreateExerciseDto> => {
    await this.exerciseServices.createEntity(exerciseInput);
    return exerciseInput;
  };
}
