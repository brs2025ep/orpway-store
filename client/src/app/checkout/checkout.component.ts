import { Component } from '@angular/core';
import { CatalogProduct, produtos } from '../models/catalog-product.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  products: CatalogProduct[] = produtos;
  cartItems: CatalogProduct[] = this.products;


  get textoSubtotal() {
    return `Nada`;
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((acc, product) => acc + product.price, 0);
  }

  onQuantityChange(value: string, product: any): void {
    let quantity = parseInt(value, 10) || 0;
    // let subtotalText = document.getElementById('subtotal-info')?.innerText;

    }

    getSubtotalText(product: any, quantityInput: string): string {
      let quantity = parseInt(quantityInput, 10) || 0;
  
      if (quantity > 1) {
        return `Subtotal: R$ ${product.price * quantity}`;
      } else if (quantity === 1) {
        return `Custo: R$ ${product.price * quantity}`;
      } else {
        return `Nada`;
      }
  
    }


  removeProduct(productId: number): void {
    const index = this.cartItems.findIndex(product => product.id === productId);
    if (index !== -1) {
    this.cartItems.splice(index, 1);
  }
  }

}
