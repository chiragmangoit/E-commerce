import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartProducts: Product[] = [];
  cartValue: number = 0;

  cartQuantity = new Subject<number>();
  emitTotalAmount = new Subject<number>();

  constructor(private http: HttpClient, private route: Router) {}

  cart(product: Product) {
    if (localStorage.length != 0) {
      let index = this.cartProducts.findIndex(
        (item) => item['id'] === product['id']
      );
      if (this.cartProducts.find((item) => item['id'] === product['id'])) {
        this.cartProducts[index]['quantity']++;
      } else {
        this.cartProducts.push(product);
      }
      this.cartValue++;
      this.cartQuantity.next(this.cartValue);
    } else {
      this.route.navigate(['/login']);
    }
  }

  getCartProducts() {
    return this.cartProducts;
  }

  removeCartProduct(index: number, quantity: number) {
    this.cartProducts.splice(index, 1);
    this.cartValue = this.cartValue - quantity;
    this.cartQuantity.next(this.cartValue);
  }

  clearCart() {
    this.cartProducts.splice(0, this.cartProducts.length)
    this.cartValue = 0;
    this.cartQuantity.next(this.cartValue);
  }
}
