import { Response, Request } from 'express'
export interface ITaskController {
    create(req: Request, res: Response): Promise<void>
    update(eq: Request, res: Response): Promise<void>
    delete(req: Request, res: Response): Promise<void>
    get(req: Request, res: Response): Promise<void>
    assignTaskController(req: Request, res: Response): Promise<void>
}
