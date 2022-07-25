import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  constructor() { }
  
  wishListServiceData:Product[] = [];

  addWishListData(data:Product) {

  if (this.wishListServiceData.includes(data)) {
    return
  }

    this.wishListServiceData.push(data);
    
  }
    
  getWishListData() {
    return this.wishListServiceData;
  }


}
