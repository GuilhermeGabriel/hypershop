import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('Product')
export class ProductType {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  imgUrl: string;

  @Field()
  category: string;

  @Field()
  price: number;

  @Field()
  quantity: number;
}
