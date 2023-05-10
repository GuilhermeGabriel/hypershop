import { CreateUserInput } from './create-user.input';
import { UserService } from './user.service';
export declare class UserResolver {
    private userService;
    constructor(userService: UserService);
    user(id: string): Promise<import("./user.entity").User>;
    users(): Promise<import("./user.entity").User[]>;
    createUser(createUserInput: CreateUserInput): Promise<import("./user.entity").User>;
}
