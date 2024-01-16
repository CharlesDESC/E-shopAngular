import { Component, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { MatCardModule } from '@angular/material/card';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/add-cart.service';
import { CartComponent } from '../cart/cart.component';
import { MatButtonModule } from '@angular/material/button';

import {
  NgFor,
  NgIf,
  NgStyle,
  UpperCasePipe,
  CurrencyPipe,
  DatePipe,
} from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    NgStyle,
    UpperCasePipe,
    CurrencyPipe,
    DatePipe,
    MatCardModule,
    CartComponent,
    MatButtonModule,
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() myProduct!: Product;

  selectedSize: string = '';
  selectedPrice: number = 0;

  updateSelectedSize(size: string, price: number) {
    this.selectedSize = size;
    this.selectedPrice = price;
  }

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  onAddLike() {
    this.productService.onLikeProduct(this.myProduct);
  }

  onAddToCart() {
    this.myProduct.selectedSize = this.selectedSize;
    this.myProduct.selectedPrice = this.selectedPrice;
    console.log(this.myProduct);

    this.cartService.addToCart(this.myProduct);
  }
}
