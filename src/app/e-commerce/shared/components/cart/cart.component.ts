import {
  AfterContentChecked,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/e-commerce/data/models/product.model';
import { CartService } from 'src/app/e-commerce/data/services/cart.service';
import { CheckoutService } from 'src/app/e-commerce/data/services/checkout.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, AfterContentChecked, OnDestroy {
  showTotal: boolean = true;
  product: Product[] = [];
  totalAmount: number = 0;
  checkoutDetails: {};
  cartSubscription: Subscription;

  constructor(
    private router: Router,
    private cartService: CartService,
    private checkoutService: CheckoutService
  ) {}

  ngOnInit(): void {
    if (this.router.url === '/cart') {
      this.showTotal = false;
    }
    this.cartSubscription = this.cartService
      .getCartProducts()
      .subscribe((cartProduct) => {
        this.product = cartProduct['data'];
        console.log(this.product);
        
      });
    this.checkoutService.details.subscribe((details) => {
      this.checkoutDetails = details;
    });
  }

  ngAfterContentChecked(): void {
    if (this.product.length != 0) {
      this.totalAmount = this.product
        .map((cartProduct) => cartProduct['price'] * cartProduct['quant'])
        .reduce((amount, value) => amount + value, 0);
      this.cartService.emitTotalAmount.next(this.totalAmount);
    }
  }

  add(product) {
    this.cartService.cart(product);
  }

  substract(product, remove) {
    this.cartService.cart(product, remove);
    if (product.quantity >= 2) {
    }
    this.cartService.cartQuantity.next(this.cartService.cartValue);
  }

  removeItem(id: number) {
    this.cartService.removeCartProduct(id).subscribe();
  }

  payout() {
    if (!this.checkoutDetails) {
      alert('Please enter & confirm your shipping details');
    } else {
      this.checkoutService.onPayout(this.checkoutDetails, this.totalAmount);
    }
    this.cartService.clearCart();
    this.totalAmount = 0;
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }
}
