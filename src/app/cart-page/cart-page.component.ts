import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [NgFor, MatCardModule],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css',
})
export class CartPageComponent implements OnInit {
  total = 0;
  cartItems: any;
  ngOnInit(): void {
    this.cartItems = JSON.parse(localStorage.getItem('cartItems') ?? '');
    this.totalPrice();
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);

    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    this.totalPrice();
  }

  validateCart() {
    if (this.cartItems.length === 0) {
      return false;
    } else {
      return true;
    }
  }

  totalPrice() {
    this.total = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      this.total +=
        parseInt(this.cartItems[i].product.selectedPrice) *
        parseInt(this.cartItems[i].quantity);
    }
  }
}
