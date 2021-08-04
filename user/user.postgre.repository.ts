import pg from "../config/postgreConfig";
import { ICreateUserDto } from "./dto/create-user.dto";
import { IUserRepository } from "./user-repository.interface";
import { IUser } from "./user.interface";

export class PostgreUserRepository implements IUserRepository {
    createUser(user: ICreateUserDto): void {
        pg.query(`INSERT INTO users(
            login, password)
            VALUES ($1, $2);`, [user.login, user.password])
    }

    deleteUser(id: number): void {
        pg.query(`DELETE FROM users
        WHERE id = $1;`, [id])
    }

    async getAllUsers(): Promise<IUser[]> {
        const res = await pg.query(`select * from users`)
        const users: IUser[] = res.rows
        return users
    }

    async getUser(id: number): Promise<IUser> {
        const res = await pg.query(`select * from users where id = $1`, [id])
        const user: IUser = res.rows[0]
        return user
    }
}