import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgFor, CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dialog-cart',
  standalone: true,
  imports: [CommonModule, NgFor, MatButtonModule, MatDialogModule, RouterLink],
  templateUrl: './dialog-cart.component.html',
  styleUrls: ['./dialog-cart.component.css'],
})
export class DialogCartComponent {
  cartItems: any[] = [];

  constructor(
    private dialogRef: MatDialogRef<DialogCartComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.cartItems = this.data.cartItems;
  }

  calculateTotal(): number {
    return this.cartItems.reduce((total, cartItem) => {
      return total + cartItem.product.selectedPrice * cartItem.quantity;
    }, 0);
  }

  redirectToCartPage(): void {
    console.log(this.cartItems);
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    this.dialogRef.close();
  }
}
