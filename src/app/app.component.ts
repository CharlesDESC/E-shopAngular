import { Component, OnInit, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, NgFor, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from "./product-card/product-card.component";
import { Product } from './models/product.model';
import { SortByDatePipe } from './pipes/product.pipe';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ProductCardComponent, SortByDatePipe],
    providers: [{
      provide: LOCALE_ID,
      useValue: 'fr-FR'
    }]
})
export class AppComponent implements OnInit {

  orderAsc: string = 'asc';
  orderDesc: string= 'desc';
  order: string = 'asc';
  
  changerOrder() {
    if (this.order === this.orderAsc) {
      this.order = this.orderDesc;
    } else {
      this.order = this.orderAsc;
    }
  }



products!: Product[];
  ngOnInit() {
    this.products = [
      new Product(
        "avions",
        "c'est un avion cool",
        "https://www.shutterstock.com/image-illustration/high-detailed-white-airliner-3d-600nw-720019705.jpg",
        0,
        false,
        [{ taille: "S", price: 100 },{ taille: "M", price: 200 },{ taille: "L", price: 300 }],
        new Date("2023-12-19")
      ),
      new Product(
        "avions",
        "c'est un avion cool",
        "https://www.shutterstock.com/image-illustration/high-detailed-white-airliner-3d-600nw-720019705.jpg",
        0,
        false,
        [{ taille: "S", price: 100 },{ taille: "M", price: 200 }],
        new Date("2023-12-20")
      ),
      new Product(
        "avions",
        "c'est un avion cool",
        "https://www.shutterstock.com/image-illustration/high-detailed-white-airliner-3d-600nw-720019705.jpg",
        0,
        false,
        [{ taille: "S", price: 100 }],
        new Date("2023-12-18")
      )
    ]
  }

}

