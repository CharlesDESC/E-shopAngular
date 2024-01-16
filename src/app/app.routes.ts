import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { CartPageComponent } from './cart-page/cart-page.component';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'cart', component: CartPageComponent },
];
