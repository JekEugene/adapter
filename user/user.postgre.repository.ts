import { ICreateUserDto } from "./dto/create-user.dto";
import { IUserRepository } from "./user-repository.interface";

export class PostgreUserRepository implements IUserRepository {
    createUser(user: ICreateUserDto): void {
        
    }

    deleteUser(id: number): void {

    }
}