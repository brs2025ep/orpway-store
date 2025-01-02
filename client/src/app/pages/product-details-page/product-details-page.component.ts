import { Component, OnInit } from '@angular/core';
import { CatalogProduct } from '../../models/catalog-product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { CartItem } from 'src/app/models/cart-item.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})

export class ProductDetailsPageComponent implements OnInit {
  mercadoria: CatalogProduct | undefined;

  constructor(
    private route: ActivatedRoute,
    private mercadoriasService: ProductsService,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {     
     const routeParameters = this.route.snapshot.paramMap;
     const productId = routeParameters.get('id');
     this.mercadoria = this.mercadoriasService.getById(Number(productId)); 
  }

  addToCart(id: number | undefined, quantityValue: string): void {
    const mercadoria : CartItem = {
     ...this.mercadoria!,
      quantity: parseInt(quantityValue, 10),
    }

    this.cartService.addToCart(mercadoria);
    } 

}
