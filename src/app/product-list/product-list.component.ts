import { Component, OnInit, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../models/product.model';
import { SortByDatePipe, SearchProductPipe } from '../pipes/product.pipe';
import { ProductService } from '../services/product.service';
import { SearchFilterService } from '../services/search-filter.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    ProductCardComponent,
    SearchProductPipe,
    SortByDatePipe,
    CommonModule,
    MatButtonModule,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
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
