import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/e-commerce/data/services/checkout.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  constructor(private CheckoutService:CheckoutService) { }
  
  subscription;

  orderListData;

  ngOnInit(): void {
    this.subscription = this.CheckoutService.oderList().subscribe((data) => {
      console.log(data);
    });
  }

}
