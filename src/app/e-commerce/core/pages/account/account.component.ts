import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  first_name:string;
  last_name:string;
  email:string;

  onEdit = false;

  constructor() { }

  ngOnInit(): void {
    this.first_name = 'Mohit';
    this.last_name= 'Upadhyay';
    this.email = 'mohitu531@gmail.com';
  }
  edit() {
    this.onEdit = true;
  }

  update(f) {
    console.log(f.value);
    this.onEdit = false;
  }

}
