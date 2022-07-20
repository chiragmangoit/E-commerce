import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GmapComponent } from './component/gmap/gmap.component';
import { ContactFormComponent } from './component/contact-form/contact-form.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  { path:'contact', component:ContactUsComponent }
]

@NgModule({
  declarations: [
    GmapComponent,
    ContactFormComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactModule { }
