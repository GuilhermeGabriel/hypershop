import { CreateProductInput } from './create-product.input';
import { ProductService } from './product.service';
export declare class ProductResolver {
    private productService;
    constructor(productService: ProductService);
    product(id: string): Promise<import("./product.entity").Product>;
    products(): Promise<import("./product.entity").Product[]>;
    productsByIds(ids: string[]): Promise<import("./product.entity").Product[]>;
    createProduct(createProductInput: CreateProductInput): Promise<import("./product.entity").Product>;
}
