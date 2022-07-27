import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDataServiceService {
  constructor() {}
  userData: {
    email: string;
    id: string;
    _token: string;
  } = JSON.parse(localStorage.getItem('userData'));

  getUserData() {
    return this.userData;
  }
}
