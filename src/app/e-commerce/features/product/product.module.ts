import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { SharedModule } from '../../shared/shared.module';
import { FeatureItemComponent } from './components/feature-item/feature-item.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductDetailNavComponent } from './components/product-detail-nav/product-detail-nav.component';
import { SingleProductDetailComponent } from './components/single-product-detail/single-product-detail.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductListComponent,
    FeatureItemComponent,
    ProductDetailNavComponent,
    SingleProductDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgxPaginationModule,
  ],
  exports: [
    ProductDetailsComponent,
    ProductListComponent,
    ProductDetailNavComponent
  ]
})
export class ProductModule { }
