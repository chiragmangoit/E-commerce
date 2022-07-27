import {
  AfterContentChecked,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
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
  product$: Observable<any>;

  constructor(
    private router: Router,
    private cartService: CartService,
    private checkoutService: CheckoutService
  ) {}

  ngOnInit(): void {
    if (this.router.url === '/cart') {
      this.showTotal = false;
    }
    this.product$ = this.cartService.getCartProducts();

    this.cartService.emitCartProducts.subscribe(
      data => this.product$ = data
    )
    
    this.checkoutService.details.subscribe((details) => {
      return details;
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
    this.cartService.emitCartProducts.next(this.cartService.getCartProducts());
  }

  substract(product, remove) {
    if (product.quant >= 2) {
      this.cartService.cart(product, remove);
    }
    this.cartService.emitCartProducts.next(this.cartService.getCartProducts());

  }

  removeItem(id: number) {
    this.cartService.removeCartProduct(id).subscribe();
    this.cartService.emitCartProducts.next(this.cartService.getCartProducts());
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
    // this.cartSubscription.unsubscribe();
  }
}
