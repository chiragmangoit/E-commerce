import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  checkoutData = [];
  details = new Subject<{}>();
  constructor() { }

  onCheckout(formData:{}){
    this.details.next(formData);
  }

  onPayout(details:{}, checkoutAmount:number) {
    this.checkoutData.push({details,checkoutAmount});
    console.log(this.checkoutData);
  }
}
