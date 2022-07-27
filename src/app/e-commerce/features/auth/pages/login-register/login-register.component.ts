import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/e-commerce/core/services/auth.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css'],
})
export class LoginRegisterComponent implements OnInit {
  @ViewChild('loginForm') loginForm: NgForm;
  @ViewChild('signUpForm') signUpForm: NgForm;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onLogin() {
    this.authService.signIn(this.loginForm.value).subscribe(
      (response) => {
        this.router.navigate(['']);
      },
      (errorMessage) => {
        alert(errorMessage);
      }
    );
  }

  onSignUp() {
    this.authService.signUp(this.signUpForm.value).subscribe(
      (response) => {
        alert('Registered Successfully,Please Login to Continue');
      },
      (errorMessage) => {
        console.log(errorMessage);
      }
    );
    this.signUpForm.reset();
  }
}
