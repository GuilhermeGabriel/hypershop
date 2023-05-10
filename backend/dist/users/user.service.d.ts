import { Repository } from 'typeorm';
import { CreateUserInput } from './create-user.input';
import { User } from './user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    getUser(id: string): Promise<User>;
    getUsers(): Promise<User[]>;
    createUser(createUserInput: CreateUserInput): Promise<User>;
    getManyUsers(usersIds: string[]): Promise<User[]>;
}
