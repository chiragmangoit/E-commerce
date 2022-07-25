import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail-nav',
  templateUrl: './product-detail-nav.component.html',
  styleUrls: ['./product-detail-nav.component.css'],
})
export class ProductDetailNavComponent implements OnInit {
  constructor() {}

  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;

  countStar(star) {
    this.selectedValue = star;
    console.log('Value of star', star);
  }

  ngOnInit(): void {}
}
