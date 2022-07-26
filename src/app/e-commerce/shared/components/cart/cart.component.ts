import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/e-commerce/data/models/product.model';
import { CartService } from 'src/app/e-commerce/data/services/cart.service';
import { CheckoutService } from 'src/app/e-commerce/data/services/checkout.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, AfterContentChecked {
  showTotal: boolean = true;
  product: Product[] = [];
  totalAmount: number = 0;
  checkoutDetails:{};

  constructor(
    private router: Router,
    private cartService: CartService,
    private checkoutService: CheckoutService
  ) {}

  ngOnInit(): void {
    if (this.router.url === '/cart') {
      this.showTotal = false;
    }
    this.product = this.cartService.getCartProducts();

    this.checkoutService.details.subscribe(
      details => {
        this.checkoutDetails = details;
      }
    )
  }

  ngAfterContentChecked(): void {
    if (this.product.length != 0) {
      this.totalAmount = this.product
        .map((cartProduct) => cartProduct['price'] * cartProduct['quantity'])
        .reduce((amount, value) => amount + value, 0);
      this.cartService.emitTotalAmount.next(this.totalAmount);
    }
  }

  add(product) {
    product.quantity++;
    this.cartService.cartValue++;
    this.cartService.cartQuantity.next(this.cartService.cartValue);
  }

  substract(product) {
    if (product.quantity >= 2) {
      product.quantity--;
      this.cartService.cartValue--;
    }
    this.cartService.cartQuantity.next(this.cartService.cartValue);
  }

  removeItem(index: number, quantity: number) {
    this.cartService.removeCartProduct(index, quantity);
  }

  payout() { 
    if (!this.checkoutDetails) {
      alert("Please confirm your shipping details")
    } else {
      this.checkoutService.onPayout(this.checkoutDetails, this.totalAmount)
    }
  }
}
