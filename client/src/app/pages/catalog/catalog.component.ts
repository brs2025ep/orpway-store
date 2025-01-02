import { Component, OnInit } from '@angular/core';
import { CatalogProduct, Category, sampleProducts } from 'src/app/models/catalog-product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  mercadorias: CatalogProduct[] | undefined;
  
  constructor(private mercadoriasService : ProductsService) { }
  
  filteredProducts: CatalogProduct[] = this.mercadoriasService.products;

  ngOnInit(): void {
    this.mercadorias = this.mercadoriasService.getAll();
  }

  filterByCategory(category: Category | ''): void {
    if (category) {
      this.filteredProducts = this.mercadoriasService.getByCategory(category);
    } else {
      this.filteredProducts = this.mercadoriasService.getAll();
    }
  }

 
}
