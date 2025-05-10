import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { MembershipTierEnum } from '../../../shared/enums/MembershipTierEnum';
import { BodyTrackModel } from './BodyTrackModel';
import { PlanModel } from './PlanModel';
import { BodyTrack } from '@domain/entities/BodyTrack';
import { Plan } from '@domain/entities/Plan';

@Entity('Users')
export class UserModel extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'nvarchar', nullable: false })
  username!: string;

  @Column({ type: 'nvarchar', nullable: false })
  password!: string;

  @Column({ type: 'nvarchar', default: MembershipTierEnum.BASIC })
  membershipTier!: MembershipTierEnum;

  // Relationships
  @OneToMany(() => BodyTrackModel, (bodyTrack) => bodyTrack.userId)
  bodyTracks!: BodyTrack[];

  @OneToMany(() => PlanModel, (plan) => plan.userId)
  plans!: Plan[];
}
