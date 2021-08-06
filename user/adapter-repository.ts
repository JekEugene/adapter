import { IUser } from './user.interface';
import { ICreateUserDto } from './dto/create-user.dto';
import { IUserRepository } from './user-repository.interface';
import { MongoUserRepository } from './user.mongo.repository';
import { PostgreUserRepository } from './user.postgre.repository';

export class AdapterUserRepository implements IUserRepository {
    
    private database: IUserRepository
    
    constructor(db: string) {
        if(db === `postgre`) {
            this.database = new PostgreUserRepository()
        } else if (db === `mongo`) {
            this.database = new MongoUserRepository()
        } else {
            console.log(`incorrect db`)
            process.exit()
        }
    }

    createUser(user: ICreateUserDto): void {
        this.database.createUser(user)
    }

    deleteUser(id: string): void {
        return this.database.deleteUser(id)
    }

    async getAllUsers(): Promise<IUser[]> {
        return await this.database.getAllUsers()
    }

    async getUser(id: string): Promise<IUser> {
        return await this.database.getUser(id)
    }
}