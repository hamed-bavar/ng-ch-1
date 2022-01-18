import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { CardsComponent } from './cards/cards.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CardComponent } from './cards/card/card.component';
import { SelectFilterComponent } from './select-filter/select-filter.component';
@NgModule({
  declarations: [
    CardsComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    SelectFilterComponent,
  ],
  imports: [CommonModule, CoreRoutingModule, SharedModule, HttpClientModule],
})
export class CoreModule {}
