import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopper-info',
  templateUrl: './shopper-info.component.html',
  styleUrls: ['./shopper-info.component.css']
})
export class ShopperInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onCheckout(form:NgForm){
    console.log(form);
  }

}
