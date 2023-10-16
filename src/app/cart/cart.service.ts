import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductModel } from '../shared/models/product.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _products: Array<ProductModel> = []
  private _channel = new Subject<ProductModel[]>();

  public channel$ = this._channel.asObservable();

  buyProduct(product: ProductModel): void {
    this._products.push(product);
    this._channel.next(this._products);
  }

  clearCart()
  {
    this._products = []
    this._channel.next(this._products);
  }
}
