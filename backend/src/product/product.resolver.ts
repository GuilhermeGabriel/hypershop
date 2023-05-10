import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { ProductType } from './product.type';
import { CreateProductInput } from './create-product.input';
import { ProductService } from './product.service';
@Resolver(of => ProductType)
export class ProductResolver {
  constructor(
    private productService: ProductService,
  ) {}

  @Query(returns => ProductType)
  async product(
    @Args('id') id: string,
  ) {
    return this.productService.getProduct(id);
  }

  @Query(returns => [ProductType])
  async products() {
    return this.productService.getProducts();
  }

  @Query(returns => [ProductType])
  async productsByIds(
    @Args('ids', { type: () => [String] }) ids: string[],
  ) {
    return this.productService.getProductsByIds(ids);
  }

  @Mutation(returns => [ProductType])
  async createProduct(
    @Args('createUserInput') createProductInput: CreateProductInput
  ) {
    return this.productService.createProduct(createProductInput);
  }
}