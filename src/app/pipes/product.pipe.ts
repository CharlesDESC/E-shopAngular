import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'sortByDate',
  standalone: true,
})
export class SortByDatePipe implements PipeTransform {
  transform(products: Product[], order?: any) {
    let desc = !(order && order === 'asc');
    return products.sort((a, b) => {
      if (desc) return b.date.getTime() - a.date.getTime();
      else return a.date.getTime() - b.date.getTime();
    });
  }
}

@Pipe({
  name: 'searchProduct',
  standalone: true,
})
export class SearchProductPipe implements PipeTransform {
  transform(products: Product[], search?: any) {
    if (!search) return products;
    return products.filter(product => {
      return product.title.toLowerCase().includes(search.toLowerCase());
    });
  }
}
