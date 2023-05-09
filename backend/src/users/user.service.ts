import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid';
import { Repository } from 'typeorm';
import { CreateUserInput } from './create-user.input';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) { }

  async getUser(id: string): Promise<User> {
    return this.userRepository.findOne({
      where: ({ id })
    });
  }

  async getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async createUser(createUserInput: CreateUserInput): Promise<User> {
    const { firstName, lastName } = createUserInput;

    const user = this.userRepository.create({
      id: uuid(),
      firstName,
      lastName
    });

    return this.userRepository.save(user);
  }

  async getManyUsers(usersIds: string[]): Promise<User[]> {
    return this.userRepository.find({
      where: {
        id: {
          $in: usersIds,
        } as any
      }
    });
  }
}
