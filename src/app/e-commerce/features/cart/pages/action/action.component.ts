import {ChangeDetectorRef } from '@angular/core';
import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/e-commerce/data/services/cart.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit, AfterContentChecked {

  totalAmount:number = 0;
  constructor(private cartService:CartService, private cdref: ChangeDetectorRef) { }
  
  ngOnInit(): void {
  }
  
  ngAfterContentChecked(): void {
    this.cartService.emitTotalAmount.subscribe( 
      amount => {
        this.totalAmount = amount;
      }
    )
    this.cdref.detectChanges();

  }
  


}
