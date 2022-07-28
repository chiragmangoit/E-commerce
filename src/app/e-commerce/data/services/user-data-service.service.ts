import { Injectable } from '@angular/core';
import { LoggedUser } from '../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class UserDataServiceService {
  constructor() {}
  userData:LoggedUser = JSON.parse(localStorage.getItem('userData'));

  getUserData() {
    return this.userData;
  }
}
