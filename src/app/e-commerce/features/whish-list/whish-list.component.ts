import { Component, OnInit } from '@angular/core';
import { WishListService } from '../../data/services/wish-list.service';

@Component({
  selector: 'app-whish-list',
  templateUrl: './whish-list.component.html',
  styleUrls: ['./whish-list.component.css']
})
export class WhishListComponent implements OnInit {

  constructor(private wishList:WishListService) { }
  
  wishListData;

  ngOnInit(): void {
    this.wishListData = this.wishList.getWishListData();
    console.log(this.wishListData);
  }

}