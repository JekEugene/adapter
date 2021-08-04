import connectDB from "./config/mongoConfig";
connectDB()
import { ICreateUserDto } from './user/dto/create-user.dto';
import { AdapterUserRepository } from './user/adapter-repository';

const adapter = new AdapterUserRepository(`mongo`)
const user: ICreateUserDto = {
    login: 'user23',
    password: `qwerty`
};
(async () => {
    const users = await adapter.getAllUsers()
    console.log('main')
    console.log(users);
})()
