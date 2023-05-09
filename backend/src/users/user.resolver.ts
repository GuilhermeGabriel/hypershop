import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { UserType } from './user.type';
import { CreateUserInput } from './create-user.input';
import { UserService } from './user.service';

@Resolver(of => UserType)
export class UserResolver {
  constructor(
    private userService: UserService,
  ) {}

  @Query(returns => UserType)
  async user(
    @Args('id') id: string,
  ) {
    return this.userService.getUser(id);
  }

  @Query(returns => [UserType])
  async users() {
    return this.userService.getUsers();
  }

  @Mutation(returns => UserType)
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput
  ) {
    return this.userService.createUser(createUserInput);
  }
}