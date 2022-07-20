import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/e-commerce/core/services/auth.service';


@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  @ViewChild('loginForm') loginForm:NgForm;
  @ViewChild('signUpForm') signUpForm:NgForm;
  constructor( private authService:AuthService) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.authService.signIn(this.loginForm.value).subscribe();
  }

  onSignUp() {
    this.authService.signUp(this.signUpForm.value).subscribe();
    
  }
}
