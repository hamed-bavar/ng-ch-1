import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { CardsComponent } from './cards/cards.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

import { CardComponent } from './cards/card/card.component';
@NgModule({
  declarations: [
    CardsComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
  ],
  imports: [CommonModule, CoreRoutingModule, SharedModule, HttpClientModule],
})
export class CoreModule {}
