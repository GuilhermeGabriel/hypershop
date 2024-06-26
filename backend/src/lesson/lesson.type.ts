import { ObjectType, Field, ID } from '@nestjs/graphql';
import { UserType } from 'src/users/user.type';

@ObjectType('Lesson')
export class LessonType {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;

  @Field(type => [UserType])
  students: string[];
}