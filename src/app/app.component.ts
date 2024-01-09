import { Component, OnInit, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';
import { HeaderComponent } from './header/header.component';
import { Product } from './models/product.model';
import { SortByDatePipe, SearchProductPipe } from './pipes/product.pipe';
import { ProductService } from './services/product.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SearchFilterService } from './services/search-filter.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    SortByDatePipe,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    SearchProductPipe,
    ProductCardComponent,
    HeaderComponent,
  ],
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

  search: string = '';
  title: string = '';

  products!: Product[];
  cart = [];

  changerOrder() {
    if (this.order === this.orderAsc) {
      this.order = this.orderDesc;
    } else {
      this.order = this.orderAsc;
    }
  }

  constructor(
    private productService: ProductService,
    private searchFilterService: SearchFilterService
  ) {}

  ngOnInit() {
    this.products = this.productService.products;
    this.title = '';
    this.searchFilterService.searchChanged.subscribe(search => {
      this.search = search;
    });
  }
}
