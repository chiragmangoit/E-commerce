import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getData() {
    let url = "http://95.111.202.157/mangoproject/public/api/all-product";
    return this.http.get<Product>(url);    
  }

  getHomeFeatureData() {
    let url = "http://95.111.202.157/mangoproject/public/api/features-filter-product";
    return this.http.get<Product>(url);
  }

}