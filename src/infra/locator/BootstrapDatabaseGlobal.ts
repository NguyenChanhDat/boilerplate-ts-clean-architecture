import { BootstrapTypeOrm } from '../databases/dataSource/BootstrapTypeOrm';
import { IBootstrap } from '../../presentation/bootstrap/IBootstrap';

export const bootstrapDatabaseGlobal: IBootstrap = new BootstrapTypeOrm();
