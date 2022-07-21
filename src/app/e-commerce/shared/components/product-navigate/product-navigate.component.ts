import { Component, OnInit } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { CategoryService } from 'src/app/e-commerce/data/services/category.service';
import { ProductsService } from 'src/app/e-commerce/data/services/products.service';

@Component({
  selector: 'app-product-navigate',
  templateUrl: './product-navigate.component.html',
  styleUrls: ['./product-navigate.component.css'],
})
export class ProductNavigateComponent implements OnInit {
  categoryData: [
    {
      id: number;
      name: string;
    }
  ];
  categorySubscription: Subscription;
  constructor(
    private categoryService: CategoryService,
    private productData: ProductsService
  ) {}

  ngOnInit(): void {

    this.categorySubscription = this.categoryService
      .getCategory()
      .subscribe((catData) => {
        this.categoryData = catData;
      });

    this.productData
      .getData()
      .pipe(
        map((data) => {
          return data.data;
        })
      )
      .subscribe((productData) => {
        console.log(productData);
        
      });
  }
}
