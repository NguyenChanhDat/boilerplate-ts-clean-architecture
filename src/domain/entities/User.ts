import { MembershipTierEnum } from '../../shared/enums/MembershipTierEnum';

export type User = {
  id: number;
  username: string;
  password: string;
  membershipTier: MembershipTierEnum;
};
