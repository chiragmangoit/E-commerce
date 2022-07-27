import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, tap } from 'rxjs';
import { Product } from '../models/product.model';
import { UserDataServiceService } from './user-data-service.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartProducts: Product[] = [];
  cartValue: number = this.cartProducts.length;

  cartQuantity = new Subject<number>();
  emitTotalAmount = new Subject<number>();

  userData = this.userDataService.getUserData();
  constructor(
    private http: HttpClient,
    private route: Router,
    private userDataService: UserDataServiceService
  ) {}

  cart(product: Product,operation:string = '') {
    if (localStorage.length != 0) {
      this.cartValue++;
      this.cartQuantity.next(this.cartValue);
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
        tap((cartProduct) => {
          this.cartProducts = cartProduct['data'];
        })
      );
  }

  removeCartProduct(id: number) {
    return this.http.get('http://95.111.202.157/mangoproject/public/api/cart-remove/' + id);
  }

  clearCart() {
    this.cartProducts.splice(0, this.cartProducts.length);
    this.cartValue = 0;
    this.cartQuantity.next(this.cartValue);
  }
}
