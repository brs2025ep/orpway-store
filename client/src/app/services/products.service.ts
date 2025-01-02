import { Injectable } from '@angular/core';
import { CatalogProduct, sampleProducts } from '../models/catalog-product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: CatalogProduct[] = sampleProducts;

  constructor() { }

  getAll() {
    return this.products;
  }

  getById(id: number) {
    return this.products.find((prod) => prod.id === id);
  }

  getByCategory(category: string) {
    return this.products.filter((prod) => prod.category === category);
  }

  
}
