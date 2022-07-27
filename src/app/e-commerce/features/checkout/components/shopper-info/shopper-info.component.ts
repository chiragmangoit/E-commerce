import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CheckoutService } from 'src/app/e-commerce/data/services/checkout.service';

@Component({
  selector: 'app-shopper-info',
  templateUrl: './shopper-info.component.html',
  styleUrls: ['./shopper-info.component.css']
})
export class ShopperInfoComponent implements OnInit {

  constructor( private checkOutService:CheckoutService) { }

  ngOnInit(): void {
  }

  onCheckout(form:NgForm){
    this.checkOutService.onCheckout(form.value);
  }

}
