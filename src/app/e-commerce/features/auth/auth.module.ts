import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginRegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class AuthModule { }
  