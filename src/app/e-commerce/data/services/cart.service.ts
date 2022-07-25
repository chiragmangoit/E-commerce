import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartProducts: Product[] = [];
  cartValue: number = 0;

  cartQuantity = new Subject<number>();

  constructor() {}

  cart(product: Product) {
    if (this.cartProducts.includes(product)) {
      product['quantity']++;
    } else {
      this.cartProducts.push(product);
    }
    this.cartValue++;
    this.cartQuantity.next(this.cartValue);
  }

  getCartProducts() {
    return this.cartProducts;
  }

  removeCartProduct(index: number, quantity: number) {
    this.cartProducts.splice(index, 1);    
    this.cartValue = this.cartValue - quantity;
    this.cartQuantity.next(this.cartValue);
  }
}
