import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
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
    let index = this.cartProducts.findIndex(
      (item) => item['id'] === product['id']
    ) 
    if (this.cartProducts.find((item) => item['id'] === product['id'])) {
      this.cartProducts[index]['quantity']++;
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
