import { ISessionServices } from '../../../application/services/interfaces/ISessionServices';
import { SessionServices } from '../../../application/services/SessionServices';

export const sessionServicesGlobal: ISessionServices = new SessionServices();
