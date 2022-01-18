import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoadingComponent } from './loading/loading.component';
@NgModule({
  declarations: [NotFoundComponent, LoadingComponent],
  imports: [CommonModule],
  exports: [LoadingComponent, NotFoundComponent],
})
export class SharedModule {}
