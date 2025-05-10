import { CreateExerciseDto } from '../dto/exercise/CreateExerciseDto';
import { UpdateExerciseDto } from '../dto/exercise/UpdateExerciseDto';
import { IExerciseServices } from './interfaces/IExerciseServices';
import { exerciseRepositoryGlobal } from '@infra/locator/repository/RepositoryGlobal';
import { IExerciseRepository } from '@domain/repositories/IExerciseRepository';
import { Exercise } from '@domain/entities/Exercise';

export class ExerciseServices implements IExerciseServices {
  constructor(
    private readonly exerciseRepository: IExerciseRepository = exerciseRepositoryGlobal
  ) {}

  public createEntity = async (
    exerciseInput: CreateExerciseDto
  ): Promise<void> => {
    await this.exerciseRepository.createEntity(exerciseInput);
    return Promise.resolve();
  };

  public updateEntity = async (
    exerciseId: number,
    updateInfo: UpdateExerciseDto
  ): Promise<void> => {
    await this.exerciseRepository.updateEntity(exerciseId, updateInfo);
    return Promise.resolve();
  };

  public deleteEntity = async (exerciseId: number): Promise<void> => {
    await this.exerciseRepository.deleteEntity(exerciseId);
    return Promise.resolve();
  };

  public getEntityById = async (
    exerciseId: number
  ): Promise<Exercise | null> => {
    return await this.exerciseRepository.getEntityById(exerciseId);
  };

  public showListEntity = async (): Promise<Exercise[] | null> => {
    return await this.exerciseRepository.showListEntity();
  };
}
