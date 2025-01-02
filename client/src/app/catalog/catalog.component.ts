import { Component, OnInit } from '@angular/core';
import { CatalogProduct, Category, produtos } from '../models/catalog-product.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  products: CatalogProduct[] = produtos; 
  filteredProducts: CatalogProduct[] = this.products;

  constructor() { }

  ngOnInit(): void {
  }

  filterByCategory(category: Category | ''): void {
    if (category) {
      this.filteredProducts = this.products.filter(product => product.category === category);
    } else {
      this.filteredProducts = this.products;
    }
  }

 
}
