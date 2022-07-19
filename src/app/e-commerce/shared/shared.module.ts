import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { LoaderComponent } from './components/loader/loader.component';
import { RecommendedItemsComponent } from './components/recommended-items/recommended-items.component';
import { HeaderTopComponent } from './components/header/header-top/header-top.component';
import { HeaderBottomComponent } from './components/header/header-bottom/header-bottom.component';
import { HeaderMiddleComponent } from './components/header/header-middle/header-middle.component';
import { HeaderRoutingModule } from './header-routing.module';


@NgModule({

  declarations: [
    HeaderComponent,
    FooterComponent,
    FilterBarComponent,
    LoaderComponent,
    RecommendedItemsComponent,
    HeaderTopComponent,
    HeaderBottomComponent,
    HeaderMiddleComponent,
  ],
  imports: [CommonModule,HeaderRoutingModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    FilterBarComponent,
    LoaderComponent,
    RecommendedItemsComponent,
    HeaderTopComponent,
    HeaderBottomComponent,
    HeaderMiddleComponent,
  ],
})
export class SharedModule {}
