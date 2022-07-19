import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './e-commerce/core/pages/home/home.component';
import { ProductDetailsComponent } from './e-commerce/features/product/pages/product-details/product-details.component';
import { ProductListComponent } from './e-commerce/features/product/pages/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product', component: ProductListComponent },
  { path: 'product-detail', component: ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
