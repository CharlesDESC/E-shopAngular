import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../services/add-cart.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor, NgIf, MatButtonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartItems: any[] = [];
  isShowCart: boolean = false;

  constructor(private cartService: CartService) {}

  onDisplayCart() {
    this.isShowCart = !this.isShowCart;
    this.cartItems = this.cartService.getCartItems();
  }
}
