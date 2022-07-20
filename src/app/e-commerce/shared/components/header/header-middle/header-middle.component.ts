import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/e-commerce/core/services/auth.service';

@Component({
  selector: 'app-header-middle',
  templateUrl: './header-middle.component.html',
  styleUrls: ['./header-middle.component.css']
})
export class HeaderMiddleComponent implements OnInit {
  isAuthenticated:boolean = false;

  constructor( private authService:AuthService ) { }

  ngOnInit(): void {
    this.authService.user.subscribe(
      user => {
        this.isAuthenticated = !!user;
      }
    )
  }

  onLogout() {
    this.authService.logOut();
  }
}
