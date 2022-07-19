import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  @ViewChild('loginForm') loginForm:NgForm;
  @ViewChild('signUpForm') signUpForm:NgForm;
  constructor() { }

  ngOnInit(): void {
  }

  onLogin() {
    console.log(this.loginForm.value); 
  }

  onSignUp() {
    console.log(this.signUpForm.value);
  }
}
