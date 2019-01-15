import { ProductParamM } from './product-param-m';





export class ProductM {
    id: number;
    title: string;
    description: string;
    price: number;
    categoryId: number;
    categoryName: string;
    parameters: ProductParamM[];
}
