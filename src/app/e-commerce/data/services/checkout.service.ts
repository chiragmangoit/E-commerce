import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  checkoutData = [];
  details = new Subject<{}>();
  constructor(private http: HttpClient) {}

  onCheckout(formData: {}) {
    this.details.next(formData);
  }

  onPayout(details: {}, checkoutAmount: number) {
    this.checkoutData.push({ details, checkoutAmount });
    console.log(this.checkoutData);
  }

  oderList() {
    let userData = JSON.parse(localStorage.getItem('userData'));
    let url = 'http://95.111.202.157/mangoproject/public/api/order-list';
    return this.http.post<Product>(url, {
      user_id: userData.userId,
    });
  }
}
