import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items : CartItem[] = [];

  constructor(
    private notificationService: NotificationService,
  ) { }

  getCartFromLocalStorage(): void {
    const cart = localStorage.getItem('cart');
    if (cart) {
      this.items = JSON.parse(cart);
    }
  }

  getStock(cartItem:CartItem): number {
    return cartItem.stock;
  }

  addToCart(newCartItem: CartItem): void {
    if(newCartItem) {
      const existingCartItem = this.items.find(item => item.id === newCartItem.id);

      if (existingCartItem?.stock) {
        if (existingCartItem.stock >= newCartItem.quantity) {
          existingCartItem.stock -= newCartItem.quantity;
          existingCartItem.quantity += newCartItem.quantity;
          this.notificationService.notify('More ' + newCartItem.quantity + ' units added to the Cart !');
        } else {
          this.notificationService.notify('Product has insuficient stock!');
          return;
        }
      } else {
        this.items.push(newCartItem);
        this.notificationService.notify('New product added to the Cart !');
      }
      localStorage.setItem('cart', JSON.stringify(this.items));

    } else {
      this.notificationService.notify('Error: invalid CartItem !');
    }
    
  }

  clearCart(): void {
    this.items = [];
    localStorage.removeItem('cart');
  }
}
