import { Repository } from 'typeorm';
import { CreateProductInput } from './create-product.input';
import { Product } from './product.entity';
export declare class ProductService {
    private productRepository;
    constructor(productRepository: Repository<Product>);
    getProduct(id: string): Promise<Product>;
    getProducts(): Promise<Product[]>;
    createProduct(createProductInput: CreateProductInput): Promise<Product>;
}
