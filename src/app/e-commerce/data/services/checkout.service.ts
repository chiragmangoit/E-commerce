import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LoggedUser } from '../models/login.model';
import { Product } from '../models/product.model';
import { UserDataServiceService } from './user-data-service.service';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  checkoutData = [];
  details = new Subject<{}>();
  userData: LoggedUser;

  constructor(
    private http: HttpClient,
    private userDataService: UserDataServiceService
  ) {
    this.userData = this.userDataService.getUserData();
  }

  onCheckout(formData: {}) {
    this.details.next(formData);
    this.http.post('http://95.111.202.157/mangoproject/public/api/checkout', {
      user_id: this.userData['userId'],
      compony_name: formData['companyName'],
      email: formData['email'],
      title: formData['title'],
      first_name: formData['firstName'],
      middle_name: formData['middleName'],
      last_name: formData['lastName'],
      address1: formData['addressOne'],
      address2: formData['addressTwo'],
      zip_code: formData['postalCode'],
      country: formData['country'],
      state: formData['state'],
      phone: formData['phone'],
      mobile: formData['mobileNumber'],
      optional_address: formData['message'],
    }).subscribe();
  }

  onPayout(details: {}, checkoutAmount: number) {
    this.checkoutData.push({ details, checkoutAmount });
    console.log(this.checkoutData);
  }

  oderList() {
    let userData = JSON.parse(localStorage.getItem('userData'));
    let url = 'http://95.111.202.157/mangoproject/public/api/order-list';
    return this.http.post<Product>(url, {
      user_id: userData.userId,
    });
  }
}
