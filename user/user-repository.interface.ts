import { IUser } from './user.interface';
import { ICreateUserDto } from "./dto/create-user.dto";

export interface IUserRepository {
    createUser(createUser: ICreateUserDto): void
    deleteUser(id: string): void
    getAllUsers(): Promise<IUser[]>
    getUser(id: string): Promise<IUser> 
}