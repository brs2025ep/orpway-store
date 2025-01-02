import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items : CartItem[] = [];

  constructor() { }

  getCartFromLocalStorage(): void {
    const cart = localStorage.getItem('cart');
    if (cart) {
      this.items = JSON.parse(cart);
    }
  }

  addToCart(item: CartItem): void {
    console.log("---Product received on cart as CartItem")
    this.items.push(item);
    localStorage.setItem('cart', JSON.stringify(this.items));
    console.log('-Item added to cart with id: ', item.id);
    console.log('-Cart items: ', this.items.length);
  }

  clearCart(): void {
    this.items = [];
    localStorage.removeItem('cart');
  }
}
