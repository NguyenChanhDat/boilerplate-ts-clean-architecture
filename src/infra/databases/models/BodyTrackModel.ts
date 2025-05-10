import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
} from 'typeorm';
import { UserModel } from './UserModel';
import { User } from '@domain/entities/User';

@Entity('BodyTracks')
export class BodyTrackModel extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: false })
  weight!: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: false })
  height!: number;

  @Column({ type: 'date', nullable: false })
  date!: Date;

  @ManyToOne(() => UserModel, (user) => user.id)
  userId!: number;

  // Relationships
  @ManyToOne(() => UserModel, (user) => user.id)
  user!: User[];
}
