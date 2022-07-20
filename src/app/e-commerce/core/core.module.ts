import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pages/home/page-not-found/page-not-found.component';


import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { FeaturesItemIndexComponent } from './components/features-item-index/features-item-index.component';


@NgModule({
  declarations: [
  
    HomeComponent,
    SliderComponent,
    PageNotFoundComponent, 
    PageNotFoundComponent,
    FeaturesItemIndexComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    SharedModule,
  ]
})
export class CoreModule { }
