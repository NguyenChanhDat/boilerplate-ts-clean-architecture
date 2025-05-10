import express from 'express';
import { UserRoutes } from './routes/UserRoutes';
import { PlanRoutes } from './routes/PlanRoutes';
import cors from 'cors';

const app = express();

app.use(cors());
export const rest = (PORT: number) => {
  app.use(express.json());
  app.use('/user', UserRoutes);
  app.use('/plan', PlanRoutes);
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
};
