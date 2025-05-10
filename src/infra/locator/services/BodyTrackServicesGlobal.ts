import { IBodyTrackServices } from '../../../application/services/interfaces/IBodyTrackServices';
import { BodyTrackServices } from '../../../application/services/BodyTrackServices';

export const bodyTrackServicesGlobal: IBodyTrackServices =
  new BodyTrackServices();
