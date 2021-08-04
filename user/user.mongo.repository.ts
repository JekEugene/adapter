import { IUser } from './user.interface';
import { ICreateUserDto } from "./dto/create-user.dto";
import { IUserRepository } from "./user-repository.interface";

export class MongoUserRepository implements IUserRepository {
    createUser(user: ICreateUserDto): void {
        
    }

    deleteUser(id: number): void {

    }

    async getAllUsers(): Promise<IUser[]> {
        const users: IUser[]=[]
        return users
    }
    async getUser(id: number): Promise<IUser> {
        const user: IUser = {id: 1, login: `bob`}
        return user
    }
}