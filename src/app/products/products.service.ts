import { Injectable } from '@angular/core';
import { ProductModel } from '../shared/models/product.model';
import { Category } from '../shared/models/category';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  getItem(): ProductModel {
    return new ProductModel('Laptop', 'Compact', 1000, Category.Hardware, false);
  }

  getItems(): Array<ProductModel> {
    return [
      new ProductModel('Game', 'Interesitng', 100, Category.Software, true),
      new ProductModel('Second Game', 'Even more exiting', 200, Category.Software, true),
      new ProductModel('PC', 'Powerful', 1000, Category.Hardware, true),
      new ProductModel('Laptop', 'Compact', 1000, Category.Hardware, false)
    ];
  }
}
