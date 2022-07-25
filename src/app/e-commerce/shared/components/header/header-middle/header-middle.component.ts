import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/e-commerce/core/services/auth.service';
import { CartService } from 'src/app/e-commerce/data/services/cart.service';

@Component({
  selector: 'app-header-middle',
  templateUrl: './header-middle.component.html',
  styleUrls: ['./header-middle.component.css'],
})
export class HeaderMiddleComponent implements OnInit {
  isAuthenticated: boolean = false;
  cartValue: number;

  constructor(
    private authService: AuthService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
    this.cartService.cartQuantity.subscribe((value) => {
      this.cartValue = value;
    });
  }

  onLogout() {
    this.authService.logOut();
  }
}
