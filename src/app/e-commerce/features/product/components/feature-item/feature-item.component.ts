import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/e-commerce/data/models/product.model';
import { ProductsService } from 'src/app/e-commerce/data/services/products.service';
import { WishListService } from 'src/app/e-commerce/data/services/wish-list.service';

@Component({
  selector: 'app-feature-item',
  templateUrl: './feature-item.component.html',
  styleUrls: ['./feature-item.component.css'],
})
export class FeatureItemComponent implements OnInit, OnDestroy {
  
  productData: Product['data'];
  subscription: Subscription;
  page: number = 1;

  constructor(private productDataService: ProductsService,
    private wishList: WishListService) {}
  
  addToWishList(data) {
    this.wishList.addWishListData(data);
  }


  constructor(private productDataService: ProductsService) {}
  
  

  ngOnInit(): void {
    this.subscription = this.productDataService
      .getData()
      .subscribe((product) => {
        this.productData = product.data;       
      });
  }

  page: number = 1;
        this.productData = product.data;
      });
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }

}
