import { CatalogProduct } from "./catalog-product.model";


export interface CartItem extends CatalogProduct {
    quantity: number;
}