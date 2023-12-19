import { Component, OnInit, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, NgFor, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';
import { Product } from './models/product.model';
import { SortByDatePipe } from './pipes/product.pipe';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, ProductCardComponent, SortByDatePipe],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR',
    },
  ],
})
export class AppComponent implements OnInit {
  orderAsc: string = 'asc';
  orderDesc: string = 'desc';
  order: string = 'asc';

  changerOrder() {
    if (this.order === this.orderAsc) {
      this.order = this.orderDesc;
    } else {
      this.order = this.orderAsc;
    }
  }
  products!: Product[];
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.products;
  }
}
