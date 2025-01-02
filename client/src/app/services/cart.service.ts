import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { NotificationService } from './notification.service';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items : CartItem[] = [];

  constructor(
    private notificationService: NotificationService,
    private inventory: ProductsService,
  ) { }

  getAll(): CartItem[] {
    return this.items;
  }

  getCartSize() : number {
    return this.items.length;
  }
  getCartFromLocalStorage(): void {
    const cart = localStorage.getItem('cart');
    if (cart) {
      this.items = JSON.parse(cart);
    }
  }

  addToCart(newCartItem: CartItem): void {
    let itemQuantity = newCartItem.quantity;
    let itemId = newCartItem.id;
    if(newCartItem) {
      let productStock = this.inventory.getStock(itemId);
      if (productStock >= itemQuantity) {
        const isCartItem = this.items.some(item => item.id === itemId);
        if (!isCartItem) {
          this.items.push(newCartItem);
          this.inventory.increaseStock(itemId, -itemQuantity);
          this.notificationService.notify('New product added to the Cart !');
        } else if (isCartItem) {
          this.items.find(item => item.id === itemId)!.quantity += itemQuantity;
          this.inventory.increaseStock(itemId, -itemQuantity);
          this.notificationService.notify('More ' + itemQuantity + ' units added to the Cart !');
        }
        localStorage.setItem('cart', JSON.stringify(this.items));
      } else {
        this.notificationService.notify('Product has insuficient stock!');
      }

    } else {
      this.notificationService.notify('Error: invalid CartItem !');
    }
    
  }

  clearCart(): void {
    this.items = [];
    localStorage.removeItem('cart');
  }
}
