import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogProduct, Category } from 'src/app/models/catalog-product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  mercadorias: CatalogProduct[] | undefined;
  
  constructor(private mercadoriasService : ProductsService,
    private route: ActivatedRoute,
  ) { }
  
  filteredProducts: CatalogProduct[] = this.mercadoriasService.products;

  ngOnInit(): void {
    this.mercadorias = this.mercadoriasService.getAll();
    this.route.queryParamMap.subscribe(params => {
      const descricao = params.get('description')?.toLowerCase();

      if (descricao) {
        this.filteredProducts = this.mercadoriasService.getByDescription(descricao);
        return;
      }
    }

    )
  }

  filterByCategory(category: Category | ''): void {
    if (category) {
      this.filteredProducts = this.mercadoriasService.getByCategory(category);
    } else {
      this.filteredProducts = this.mercadoriasService.getAll();
    }
  }

 
}
