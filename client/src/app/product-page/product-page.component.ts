import { Component, OnInit } from '@angular/core';
import { CatalogProduct, produtos } from '../models/catalog-product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  product: CatalogProduct | undefined;

  constructor(
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = produtos.find((prod) => prod.id === id);
  }

  addToCart(id: number): void {
    console.log(`Product with id : ${id} was added to cart!`);
  }


}
