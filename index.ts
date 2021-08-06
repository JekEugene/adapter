import dotenv from 'dotenv'
dotenv.config()
import connectDB from "./config/mongoConfig";
connectDB()
import { ICreateUserDto } from './user/dto/create-user.dto';
import { AdapterUserRepository } from './user/adapter-repository';

const adapter = new AdapterUserRepository(`postgre`)
const user: ICreateUserDto = {
    login: 'user4',
    password: `qwerty`
};
(async () => {
    await adapter.createUser(user)
    //adapter.deleteUser('5')
    const users = await adapter.getAllUsers()
    //const users = await adapter.getUser('5')
    console.log(users);
})()
