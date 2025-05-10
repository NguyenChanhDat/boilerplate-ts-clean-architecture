import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { MuscleEnum } from '../../../shared/enums/MuscleEnum';
import { SetModel } from './SetModel';
import { Set } from '@domain/entities/Set';

@Entity('Exercises')
export class ExerciseModel extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'nvarchar', nullable: false })
  name!: string;

  @Column({ type: 'nvarchar', nullable: true })
  imageUrl?: string;

  @Column({ type: 'nvarchar', nullable: true })
  targetMuscle1?: MuscleEnum;

  @Column({ type: 'nvarchar', nullable: true })
  targetMuscle2?: MuscleEnum;

  @Column({ type: 'nvarchar', nullable: true })
  targetMuscle3?: MuscleEnum;

  // Relationships
  @OneToMany(() => SetModel, (set) => set.exerciseId)
  exercise!: Set[];
}
