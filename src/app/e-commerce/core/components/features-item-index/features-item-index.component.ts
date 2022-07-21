import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/e-commerce/data/models/product.model';
import { ProductsService } from 'src/app/e-commerce/data/services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-features-item-index',
  templateUrl: './features-item-index.component.html',
  styleUrls: ['./features-item-index.component.css'],
})
export class FeaturesItemIndexComponent implements OnInit, OnDestroy{
  productData: Product['data'];

  subscription: Subscription;

  constructor(
    private serviceData: HttpClient,
    private productDataService: ProductsService
  ) {}

  ngOnInit(): void {
    this.subscription = this.productDataService
      .getHomeFeatureData()
      .subscribe((product) => {
        this.productData = product.data;
      });
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
