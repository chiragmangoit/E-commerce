import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/e-commerce/data/models/product.model';
import { ProductsService } from 'src/app/e-commerce/data/services/products.service';

@Component({
  selector: 'app-feature-item',
  templateUrl: './feature-item.component.html',
  styleUrls: ['./feature-item.component.css'],
})
export class FeatureItemComponent implements OnInit, OnDestroy {
  productData: Product['data'];

  subscription: Subscription;

  constructor(private productDataService: ProductsService) {}

  ngOnInit(): void {
    this.subscription = this.productDataService
      .getData()
      .subscribe((product) => {
        this.productData = product.data;
        console.log(product);
      });
  }

  p: number = 1;
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }

}
