
import { IUser } from './user.interface';
import { ICreateUserDto } from "./dto/create-user.dto";
import { IUserRepository } from "./user-repository.interface";
import { ObjectId } from 'mongodb';
import User from './user.model';


export class MongoUserRepository implements IUserRepository {

    createUser(user: ICreateUserDto): void {
        console.log('1');
        User.create(user)
    }

    async deleteUser(id: string): Promise<void> {
        let res = await User.deleteOne({_id: new ObjectId(id)})
        console.log(res);
    }

    async getAllUsers(): Promise<IUser[]> {
        console.log('2');
        const users: IUser[] = await User.find({})
        return users
    }
    async getUser(id: string): Promise<IUser> {
        const user: IUser = await User.findOne({_id: new ObjectId(id)})
        return user
    }
}