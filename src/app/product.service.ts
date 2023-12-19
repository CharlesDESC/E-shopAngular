import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    new Product(
      'avions',
      "c'est un avion cool",
      'https://www.shutterstock.com/image-illustration/high-detailed-white-airliner-3d-600nw-720019705.jpg',
      0,
      false,
      [
        { taille: 'S', price: 100 },
        { taille: 'M', price: 200 },
        { taille: 'L', price: 300 },
      ],
      new Date('2023-12-19')
    ),
    new Product(
      'avions',
      "c'est un avion cool",
      'https://www.shutterstock.com/image-illustration/high-detailed-white-airliner-3d-600nw-720019705.jpg',
      0,
      false,
      [
        { taille: 'S', price: 100 },
        { taille: 'M', price: 200 },
      ],
      new Date('2023-12-20')
    ),
    new Product(
      'avions',
      "c'est un avion cool",
      'https://www.shutterstock.com/image-illustration/high-detailed-white-airliner-3d-600nw-720019705.jpg',
      0,
      false,
      [{ taille: 'S', price: 100 }],
      new Date('2023-12-18')
    ),
  ];
}
