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
      cartItem =>
        cartItem.product.id === item.id &&
        cartItem.product.selectedSize === item.selectedSize
    );
    console.log('existingItem', existingItem);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ product: item, quantity: 1 });
    }

    console.log(this.cartItems);
  }
}
