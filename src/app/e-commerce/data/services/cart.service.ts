import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Subject, } from 'rxjs';
import { Product } from '../models/product.model';
import { UserDataServiceService } from './user-data-service.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartProducts: Product[] = [];
  cartValue: number;

  cartQuantity = new Subject<number>();
  emitTotalAmount = new Subject<number>();
  emitCartProducts = new Subject<any>();

  userData = this.userDataService.getUserData();

  constructor(
    private http: HttpClient,
    private route: Router,
    private userDataService: UserDataServiceService
  ) {}

  cart(product: Product, operation: string = '') {
    if (localStorage.length != 0) {
      return this.http
        .post('http://95.111.202.157/mangoproject/public/api/add-to-card', {
          user_id: this.userData['userId'],
          product_id: product['id'],
          web_id: product['Web_ID'],
          quant: 1,
          quant_minus: operation,
        })
        .subscribe();
    } else {
      this.route.navigate(['/login']);
    }
  }

  getCartProducts() {
    return this.http
      .post('http://95.111.202.157/mangoproject/public/api/card-display', {
        user_id: this.userData['userId'],
      })
      .pipe(
        map((cartProduct) => {
          this.cartProducts = cartProduct['data'];
          this.cartQuantityUpdate();
          return cartProduct['data'];
        })
      );
  }

  removeCartProduct(id: number) {
    return this.http.get(
      'http://95.111.202.157/mangoproject/public/api/cart-remove/' + id
    );
  }

  clearCart() {
    this.cartProducts.splice(0, this.cartProducts.length);
    this.cartValue = 0;
    this.cartQuantity.next(this.cartValue);
  }

  cartQuantityUpdate() {
    this.cartValue = this.cartProducts
      .map((cartProduct) => cartProduct['quant'])
      .reduce((quantity: number, value: number) => +quantity + +value, 0);
    this.cartQuantity.next(this.cartValue);
  }
}
