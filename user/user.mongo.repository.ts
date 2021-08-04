
import { IUser } from './user.interface';
import { ICreateUserDto } from "./dto/create-user.dto";
import { IUserRepository } from "./user-repository.interface";
import { ObjectId } from 'mongodb';
import User from './user.model';


export class MongoUserRepository implements IUserRepository {

    async createUser(user: ICreateUserDto): Promise<void> {
        
    }

    async deleteUser(id: number): Promise<void> {
        
    }

    async getAllUsers(): Promise<IUser[]> {
        const users: IUser[] = await User.find({})
        return users
    }
    async getUser(id: number): Promise<IUser> {
        const user: IUser = undefined
        return user
    }
}