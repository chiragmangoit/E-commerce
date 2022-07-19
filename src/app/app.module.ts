import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogListComponent } from './e-commerce/features/blogs/pages/blog-list/blog-list.component';
import { BlogSingleComponent } from './e-commerce/features/blogs/pages/blog-single/blog-single.component';
import { SharedModule } from './e-commerce/shared/shared.module';
import { CoreModule } from './e-commerce/core/core.module';
import { AuthModule } from './e-commerce/features/auth/auth.module';
import { BlogModule } from './e-commerce/features/blogs/blog.module';
import { ProductModule } from './e-commerce/features/product/product.module';
import { CartModule } from './e-commerce/features/cart/cart.module';
import { CheckoutModule } from './e-commerce/features/checkout/checkout.module';
import { ContactModule } from './e-commerce/features/contact/contact.module';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    BlogSingleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    AuthModule,
    BlogModule,
    ProductModule,
    CartModule,
    CheckoutModule,
    ContactModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
