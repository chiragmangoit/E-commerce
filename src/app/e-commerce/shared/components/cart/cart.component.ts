import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  showTotal = true;
  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.router.url === '/cart') {
     this.showTotal = false
    }
  }
}
