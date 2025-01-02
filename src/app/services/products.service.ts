import { Injectable } from '@angular/core';
import { CatalogProduct, sampleProducts } from '../models/catalog-product.model';
import { get } from 'http';

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

  getByDescription(description: string) {
    return this.products.filter((prod) => prod.description.toLowerCase().includes(description));
  }

  getStock(itemId:number): number {
    const product = this.getById(itemId);
      if (product) {
        return product.stock;
      } else {
        return 0;
      }
    }
  
  increaseStock(itemId: number, quantityAdded: number) {
    const product = this.getById(itemId);
    if (product){
      product.stock += quantityAdded;
      console.log('Stock of product with ID '+ itemId + ' increased by ' + quantityAdded + ' units');
    }
  }

  deleteAll() {
    this.products.length = 0;
  }

  
}
