import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Params } from '@angular/router';
import { ProductsService } from 'src/app/e-commerce/data/services/products.service';

@Component({
  selector: 'app-single-product-detail',
  templateUrl: './single-product-detail.component.html',
  styleUrls: ['./single-product-detail.component.css'],
})
export class SingleProductDetailComponent implements OnInit {
  
  productId: number;
  
  productDetails;

  subscription;

  constructor(
    private ProductsService: ProductsService,
    private routes: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routes.params.subscribe((params: Params) => {
      this.productId = +params['id'];
    });
    this.subscription = this.ProductsService.getProductDetails(
      this.productId
    ).subscribe((product) => {
      this.productDetails = product.data;
    });
  }
}
