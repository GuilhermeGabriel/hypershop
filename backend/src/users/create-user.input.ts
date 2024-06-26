import { InputType, Field } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @MinLength(1)
  @Field()
  firstName: string;

  @MinLength(1)
  @Field()
  lastName: string;
}