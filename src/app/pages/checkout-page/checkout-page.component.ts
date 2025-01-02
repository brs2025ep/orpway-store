import { Component, OnInit } from '@angular/core';
import { CatalogProduct, sampleProducts } from 'src/app/models/catalog-product.model';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent {
  products: CatalogProduct[] = sampleProducts;
  cartItems: CatalogProduct[] = this.products;

  getTotalPrice(): number {
    return this.cartItems.reduce((acc, product) => acc + product.price, 0);
  }
}
