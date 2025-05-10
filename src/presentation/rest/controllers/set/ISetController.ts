import { Request, Response } from 'express';

export interface ISetController {
  create(req: Request, res: Response): Promise<void>;
  update(req: Request, res: Response): Promise<void>;
  delete(req: Request, res: Response): Promise<void>;
  get(req: Request, res: Response): Promise<void>;
}
