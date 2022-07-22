import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-recommended-items',
  templateUrl: './recommended-items.component.html',
  styleUrls: ['./recommended-items.component.css']
})
export class RecommendedItemsComponent implements OnInit {



  recommandedItem = [
    {
      src: '../../../../../assets/images/home/recommend1.jpg',
      price: '$56',
      desc: 'Easy Polo Black Edition'
    },
    {
      src: '../../../../../assets/images/home/recommend2.jpg',
      price: '$56',
      desc: 'Easy Polo Black Edition'
    },
    {
      src: '../../../../../assets/images/home/recommend3.jpg',
      price: '$56',
      desc: 'Easy Polo Black Edition'
    },
    {
      src: '../../../../../assets/images/home/recommend1.jpg',
      price: '$56',
      desc: 'Easy Polo Black Edition'
    },
    {
      src: '../../../../../assets/images/home/recommend2.jpg',
      price: '$56',
      desc: 'Easy Polo Black Edition'
    },
    {
      src: '../../../../../assets/images/home/recommend3.jpg',
      price: '$56',
      desc: 'Easy Polo Black Edition'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

  recomm: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 3
      }
    },
    nav: true
  }

}