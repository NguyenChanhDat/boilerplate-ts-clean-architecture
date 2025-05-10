import express from 'express';
import { IPlanController } from '../controllers/plan/IPlanController';
import { planControllersGlobal } from '@infra/locator/controllers/PlanControllersGlobal';

const router = express.Router();

const PlanController: IPlanController = planControllersGlobal;

router.get('/', PlanController.get);

router.post('/', PlanController.create);

router.delete('/:id', PlanController.delete);

router.put('/', PlanController.update);

export { router as PlanRoutes };
