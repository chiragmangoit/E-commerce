import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class WishListService {
  constructor(private http: HttpClient, private route: Router) {}

  wishListServiceData: Product[] = [];

  addWishListData(data: Product) {
    if (localStorage.length != 0) {
      if (this.wishListServiceData.find((item) => item['id'] === data['id'])) {
        alert('The product alredy exist in wish list');
        return;
      }
      this.wishListServiceData.push(data);
      alert('The product is added to wish list');
    } else {
      this.route.navigate(['/login']);
    }
  }

  getWishListData() {
    return this.wishListServiceData;
  }

  removeProduct(i) {
    this.wishListServiceData.splice(i, 1);
  }
}
