import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../services/add-cart.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DialogCartComponent } from '../dialog-cart/dialog-cart.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor, NgIf, MatButtonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartItems: any[] = [];

  constructor(private cartService: CartService, public dialog: MatDialog) {}

  openDialog(): void {
    this.cartItems = this.cartService.getCartItems();

    const dialogRef = this.dialog.open(DialogCartComponent, {
      width: '450px',
      height: '500px',
      data: {
        cartItems: this.cartItems,
      },
    });

    // Écoute la fermeture de la boîte de dialogue
    dialogRef.afterClosed().subscribe(result => {
      console.log('La boîte de dialogue est fermée', result);
    });
  }
}
