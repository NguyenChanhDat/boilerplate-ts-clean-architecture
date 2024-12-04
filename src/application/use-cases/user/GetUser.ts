import { User } from '../../../domain/entities/User'
import { IGetUser } from './interface/IGetUser'
import { IUserServices } from '../../services/IUserServices'
export class GetUser implements IGetUser {
    constructor(
       private userServices: IUserServices
    ) {}

    public executeById = async (id: number): Promise<User> => {
        const user = await this.userServices.getUserById(id)
        if (!user) {
            throw new Error(`User with id ${id} not found`)
        }
        return user
    }
    public executeByUsername = async (username: string): Promise<User> => {
        const user = await this.userServices.getUserByUsername(username)
        if (!user) {
            throw new Error(`User with id ${username} not found`)
        }
        return user
    }
    public getAll = async (): Promise<User[]> => {
        const users = await this.userServices.showListEntity()
        if (!users) {
            throw new Error('No users found')
        }
        return users
    }
}