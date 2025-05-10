import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
} from 'typeorm';
import { PlanModel } from './PlanModel';
import { Plan } from '@domain/entities/Plan';

@Entity('Sessions')
export class SessionModel extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => PlanModel, (plan) => plan.id)
  planId!: number;

  @Column({ type: 'date', nullable: false })
  date!: Date;

  // Relationships
  @ManyToOne(() => PlanModel, (plan) => plan.id)
  Plan!: Plan[];
}
