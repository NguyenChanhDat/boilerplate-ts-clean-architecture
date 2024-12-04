import { IDeleteUser } from './interface/IDeleteUser'
import { IUserServices } from '../../services/IUserServices'

export class DeleteUser implements IDeleteUser {
    constructor(
        private userServices: IUserServices
    ) {}

    public executeById = async (id: number): Promise<void> => {
        const userById = await this.userServices.getUserById(id)
        if (!userById) {
            throw new Error()
        }
        await this.userServices.createEntity(userById)
        return Promise.resolve()
    }
}