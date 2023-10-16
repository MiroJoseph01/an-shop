import { Component, Input, inject } from '@angular/core';
import { ProductModel } from '../../shared/models/product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products!: ProductModel[];

  private _productService = inject(ProductsService);

  ngOnInit(): void {
    this.products = this._productService.getItems();
  } 
}
