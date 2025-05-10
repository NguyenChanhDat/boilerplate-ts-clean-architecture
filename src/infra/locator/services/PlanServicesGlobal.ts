import { IPlanServices } from '../../../application/services/interfaces/IPlanServices';
import { PlanServices } from '../../../application/services/PlanServices';

export const planServicesGlobal: IPlanServices = new PlanServices();
