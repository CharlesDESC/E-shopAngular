import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css',
})
export class CartPageComponent implements OnInit {
  cartItems: any;
  ngOnInit(): void {
    this.cartItems = JSON.parse(localStorage.getItem('cartItems') ?? '');
    console.log(this.cartItems[0].product);
  }
}
