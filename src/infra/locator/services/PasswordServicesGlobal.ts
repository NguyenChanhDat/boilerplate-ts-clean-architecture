import { IPasswordServices } from '../../../application/services/IPasswordServices';
import { PasswordServices } from '../../../application/services/PasswordServices';

export const passwordServicesGlobal: IPasswordServices = new PasswordServices();
