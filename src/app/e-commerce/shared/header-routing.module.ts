import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginRegisterComponent } from '../features/auth/pages/login-register/login-register.component';
import { WhishListComponent } from '../features/whish-list/whish-list.component';


const routes: Routes = [
  { path: 'login', component: LoginRegisterComponent },
  { path: 'wish-list', component: WhishListComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class HeaderRoutingModule { }
