import { IUpdateExercise } from './interfaces/IUpdateExercise';
import { exerciseServicesGlobal } from '@infra/locator/services/ExerciseServicesGlobal';
import { IExerciseServices } from '@application/services/interfaces/IExerciseServices';
import { Exercise } from '@domain/entities/Exercise';

export class UpdateExercise implements IUpdateExercise {
  constructor(
    private readonly exerciseServices: IExerciseServices = exerciseServicesGlobal
  ) {}

  public execute = async (exerciseInfo: Exercise): Promise<Exercise> => {
    const exerciseById = await this.exerciseServices.getEntityById(
      exerciseInfo.id
    );
    if (!exerciseById) {
      throw new Error(`Exercise with id ${exerciseInfo.id} not found`);
    }
    await this.exerciseServices.updateEntity(exerciseInfo.id, exerciseInfo);
    return exerciseInfo;
  };
}
