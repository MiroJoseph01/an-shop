import { Component, Input, inject } from '@angular/core';
import { ProductModel } from '../../shared/models/product.model';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input({ required: true })
  item!: ProductModel;

  private cartService = inject(CartService);

  ngOnInit(): void {} 

  onBuyTask(){
    this.cartService.buyProduct(this.item);
  }
}
