import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features-item-index',
  templateUrl: './features-item-index.component.html',
  styleUrls: ['./features-item-index.component.css']
})
export class FeaturesItemIndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  featureItem = [
    {
      src: '../../../../../assets/images/home/product1.jpg',
      price: '$56',
      desc: 'Easy Polo Black Edition'
    },
    {
      src: '../../../../../assets/images/home/product2.jpg',
      price: '$56',
      desc: 'Easy Polo Black Edition'
    },
    {
      src: '../../../../../assets/images/home/product3.jpg',
      price: '$56',
      desc: 'Easy Polo Black Edition'
    },
    {
      src: '../../../../../assets/images/home/product4.jpg',
      price: '$56',
      desc: 'Easy Polo Black Edition'
    },
    {
      src: '../../../../../assets/images/home/product5.jpg',
      price: '$56',
      desc: 'Easy Polo Black Edition'
    },
    {
      src: '../../../../../assets/images/home/product6.jpg',
      price: '$56',
      desc: 'Easy Polo Black Edition'
    }
  ];
}
