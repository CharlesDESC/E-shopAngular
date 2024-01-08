import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = [];

  constructor() {}

  getCartItems() {
    return this.cartItems;
  }

  addToCart(item: any) {
    const existingItem = this.cartItems.find(
      cartItem => cartItem.product.id === item.id
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ product: item, quantity: 1 });
    }
  }
}
