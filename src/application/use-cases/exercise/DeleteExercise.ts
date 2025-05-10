import { IExerciseServices } from '@application/services/interfaces/IExerciseServices';
import { IDeleteExercise } from './interfaces/IDeleteExercise';
import { exerciseServicesGlobal } from '@infra/locator/services/ExerciseServicesGlobal';

export class DeleteExercise implements IDeleteExercise {
  constructor(
    private readonly exerciseServices: IExerciseServices = exerciseServicesGlobal
  ) {}

  public executeById = async (exerciseId: number): Promise<void> => {
    await this.exerciseServices.deleteEntity(exerciseId);
  };
}
