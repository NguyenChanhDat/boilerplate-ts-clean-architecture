import { IExerciseRepository } from '../../../../domain/repositories/IExerciseRepository';
import { Exercise } from '../../../../domain/entities/Exercise';
import { ExerciseModel } from '@infra/databases/models/ExerciseModel';
import { appDataSource } from '@infra/databases/dataSource/BootstrapTypeOrm';
import { Repository } from 'typeorm';

export class ExerciseTypeOrmRepository implements IExerciseRepository {
  constructor(
    private readonly repository: Repository<Exercise> = appDataSource.getRepository(
      ExerciseModel
    )
  ) {}

  async createEntity(exercise: Exercise): Promise<void> {
    await this.repository.save(exercise);
  }

  async updateEntity(
    exerciseId: number,
    exercise: Partial<Exercise>
  ): Promise<void> {
    await this.repository.update(exerciseId, exercise);
  }

  async deleteEntity(exerciseId: number): Promise<void> {
    await this.repository.delete(exerciseId);
  }

  async getEntityById(exerciseId: number): Promise<Exercise | null> {
    const exercise = await this.repository.findOne({
      where: { id: exerciseId },
    });
    return exercise;
  }

  async showListEntity(): Promise<Exercise[] | null> {
    return await this.repository.find();
  }
}
