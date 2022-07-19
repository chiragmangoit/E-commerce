import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pages/home/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
  
    HomeComponent,
    SliderComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ]
})
export class CoreModule { }
