import { CoreModule } from './../core/core.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SelectFilterComponent } from './select-filter/select-filter.component';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './cards/card/card.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [SelectFilterComponent, CardsComponent, CardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    CoreModule,
  ],
})
export class HomeModule {}
