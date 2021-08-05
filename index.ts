import connectDB from "./config/mongoConfig";
connectDB()
import { ICreateUserDto } from './user/dto/create-user.dto';
import { AdapterUserRepository } from './user/adapter-repository';

const adapter = new AdapterUserRepository(`postgre`)
const user: ICreateUserDto = {
    login: 'user3',
    password: `qwerty`
};
(async () => {
    //adapter.createUser(user)
    //adapter.deleteUser('5')
    const users = await adapter.getAllUsers()
    //const users = await adapter.getUser('5')
    console.log(users);
})()
