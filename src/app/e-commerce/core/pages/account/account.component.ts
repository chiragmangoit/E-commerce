import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  onEdit = false;

  constructor() { }

  ngOnInit(): void {
  }
  edit() {
    this.onEdit = true;
  }

  update() {
    this.onEdit = false;
  }

}
