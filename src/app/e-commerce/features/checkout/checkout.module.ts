import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutOptionsComponent } from './components/checkout-options/checkout-options.component';
import { ShopperInfoComponent } from './components/shopper-info/shopper-info.component';
import { ReviewPaymentComponent } from './components/review-payment/review-payment.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes:Routes = [
  { path:'checkout', component:CheckoutComponent}
]

@NgModule({
  declarations: [
    CheckoutOptionsComponent,
    ShopperInfoComponent,
    ReviewPaymentComponent,
    CheckoutComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class CheckoutModule { }
