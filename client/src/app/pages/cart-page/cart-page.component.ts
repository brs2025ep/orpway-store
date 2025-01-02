import { Component } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {
  
  constructor( private cartService: CartService ) { }
  cartItems: CartItem[] = this.cartService.items;

  onQuantityChange(value: string, product: any): void {
    let quantity = parseInt(value, 10) || 0;
    // Update cart quantity
    }

  getSubtotalText(product: any, quantityInput: string): string {
    let quantity = parseInt(quantityInput, 10) || 0;

    if (quantity > 1) {
      return `Subtotal: R$ ${product.price * quantity}`;
    } else if (quantity === 1) {
      return `Cost: R$ ${product.price * quantity}`;
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
