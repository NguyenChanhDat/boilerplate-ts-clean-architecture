import { Exercise } from '@domain/entities/Exercise';
import { IGetExercise } from './interfaces/IGetExercise';
import { exerciseServicesGlobal } from '@infra/locator/services/ExerciseServicesGlobal';
import { IExerciseServices } from '@application/services/interfaces/IExerciseServices';

export class GetExercise implements IGetExercise {
  constructor(
    private readonly exerciseServices: IExerciseServices = exerciseServicesGlobal
  ) {}

  public getAll = async (): Promise<Exercise[] | null> => {
    return await this.exerciseServices.showListEntity();
  };

  public getById = async (id: number): Promise<Exercise | null> => {
    return await this.exerciseServices.getEntityById(id);
  };
}
