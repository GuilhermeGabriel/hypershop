import { InputType, Field } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class CreateProductInput {
  @MinLength(1)
  @Field()
  title: string;

  @MinLength(1)
  @Field()
  description: string;

  @MinLength(1)
  @Field()
  imgUrl: string;

  @MinLength(1)
  @Field()
  category: string;

  @MinLength(1)
  @Field()
  price: number;

  @MinLength(1)
  @Field()
  quantity: number;
}