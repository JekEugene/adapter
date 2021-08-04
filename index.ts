import { ICreateUserDto } from './user/dto/create-user.dto';
import { AdapterUserRepository } from './user/adapter-repository';

const adapter = new AdapterUserRepository(`postgre`)
const user: ICreateUserDto = {
    login: 'user23',
    password: `qwerty`
};
(async () => {
    const users = await adapter.deleteUser(1)
    console.log(users);
})()
