import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class WishListService {
  constructor() {}

  wishListServiceData: Product[] = [];

  addWishListData(data: Product) {
    if (this.wishListServiceData.find((item) => item['id'] === data['id'])) {
      alert('The product alredy exist in wish list');
      return;
    }
    this.wishListServiceData.push(data);
    alert('The product is added to wish list');
  }

  getWishListData() {
    return this.wishListServiceData;
  }

  removeProduct(i) {
    this.wishListServiceData.splice(i, 1);
  }
}
