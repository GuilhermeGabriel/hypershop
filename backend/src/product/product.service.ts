import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid';
import { Repository } from 'typeorm';
import { CreateProductInput } from './create-product.input';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) { }

  async getProduct(id: string): Promise<Product> {
    return this.productRepository.findOne({
      where: ({ id })
    });
  }

  async getProducts(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async getProductsByIds(ids: string[]): Promise<Product[]> {
    return this.productRepository.find(
      {
        where: {
          id: {
            $in: ids
          } as any
        }
      }
    );
  }

  async createProduct(createProductInput: CreateProductInput): Promise<Product> {
    const { title, description, imgUrl, price, quantity, category } = createProductInput;

    const product = this.productRepository.create({
      id: uuid(),
      title,
      description,
      imgUrl,
      price,
      quantity,
      category
    });

    return this.productRepository.save(product);
  }

  
}
