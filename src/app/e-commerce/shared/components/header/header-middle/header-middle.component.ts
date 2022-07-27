import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/e-commerce/core/services/auth.service';
import { Product } from 'src/app/e-commerce/data/models/product.model';
import { CartService } from 'src/app/e-commerce/data/services/cart.service';

@Component({
  selector: 'app-header-middle',
  templateUrl: './header-middle.component.html',
  styleUrls: ['./header-middle.component.css'],
})
export class HeaderMiddleComponent implements OnInit {
  isAuthenticated: boolean = false;
  cartValue: number;
  product: Product[] = [];
  cartSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });

    if (localStorage.length != 0) {
      this.cartSubscription = this.cartService
        .getCartProducts()
        .subscribe((cartProduct) => {
          this.product = cartProduct;
        });
    }
    this.cartService.emitCartProducts.next(this.cartService.getCartProducts());
    this.cartService.cartQuantity.subscribe((cartvalue) => {
      this.cartValue = cartvalue;
    });
  }



  onLogout() {
    this.authService.logOut();
  }
}
