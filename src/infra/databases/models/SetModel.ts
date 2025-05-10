import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
  JoinColumn,
} from 'typeorm';
import { ExerciseModel } from './ExerciseModel';
import { SessionModel } from './SessionModel';
import { Session } from '@domain/entities/Session';
import { Exercise } from '@domain/entities/Exercise';

@Entity('Sets')
export class SetModel extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => SessionModel, (session) => session.id)
  @JoinColumn({ name: 'sessionId' })
  @Column({ type: 'int', nullable: false })
  sessionId!: number;

  @ManyToOne(() => ExerciseModel, (exercise) => exercise.id)
  @JoinColumn({ name: 'exerciseId' })
  @Column({ type: 'int', nullable: false })
  exerciseId!: number;

  @Column({ type: 'int', nullable: false })
  weight!: number;

  @Column({ type: 'int', nullable: false })
  reps!: number;

  @Column({ type: 'int', nullable: false })
  restTime!: number;

  // Relationships
  @ManyToOne(() => SessionModel, (session) => session.id)
  session!: Session[];

  @ManyToOne(() => ExerciseModel, (exercise) => exercise.id)
  exercise!: Exercise[];
}
