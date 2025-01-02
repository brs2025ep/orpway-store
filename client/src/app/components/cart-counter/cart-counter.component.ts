import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-counter',
  templateUrl: './cart-counter.component.html',
  styleUrls: ['./cart-counter.component.scss']
})
export class CartCounterComponent implements OnInit {
  items: CartItem[] = [];
  
  constructor(
    private cartService: CartService,
  ) { }
  
  ngOnInit(): void {
    this.items = this.cartService.getAll();
  }

}
