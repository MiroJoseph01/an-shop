import { Component, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductModel } from 'src/app/shared/models/product.model';
import { CartService } from '../cart.service';
import { Category } from 'src/app/shared/models/category';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {
  cart!: Array<ProductModel>;

  private _sub!: Subscription;

  private _cartService = inject(CartService)

  constructor() {}

  ngOnInit(): void {
    this._sub = this._cartService.channel$
    .subscribe(
      data => this.cart = data
    );
  }

  clearCart(){
    this._cartService.clearCart()
  }

  total(): number{
    let sum = 0
    this.cart.forEach(p=> sum += p.pirce)
    return sum
  }

  name(index: number, item: ProductModel){
    return item.name; 
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }
}
