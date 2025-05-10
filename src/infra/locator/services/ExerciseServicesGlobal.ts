import { IExerciseServices } from '../../../application/services/interfaces/IExerciseServices';
import { ExerciseServices } from '../../../application/services/ExerciseServices';

export const exerciseServicesGlobal: IExerciseServices = new ExerciseServices();
