import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './e-commerce/features/product/pages/product-list/product-list.component';
import { ProductDetailsComponent } from './e-commerce/features/product/pages/product-details/product-details.component';
import { BlogListComponent } from './e-commerce/features/blogs/pages/blog-list/blog-list.component';
import { BlogSingleComponent } from './e-commerce/features/blogs/pages/blog-single/blog-single.component';
import { SharedModule } from './e-commerce/shared/shared.module';
import { CoreModule } from './e-commerce/core/core.module';
import { AuthModule } from './e-commerce/features/auth/auth.module';
import { CheckoutModule } from './e-commerce/features/checkout/checkout.module';
import { CartModule } from './e-commerce/features/cart/cart.module';
import { ContactModule } from './e-commerce/features/contact/contact.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    BlogListComponent,
    BlogSingleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    AuthModule,
    CheckoutModule,
    CartModule,
    ContactModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
