import { ICreateUserDto } from "./dto/create-user.dto";

export interface IUserRepository {
    createUser(createUser: ICreateUserDto): void
    deleteUser(id: number): void
}