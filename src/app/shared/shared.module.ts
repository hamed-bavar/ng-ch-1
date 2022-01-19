import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoadingComponent } from './loading/loading.component';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [NotFoundComponent, LoadingComponent],
  imports: [CommonModule],
  exports: [
    LoadingComponent,
    NotFoundComponent,
    MatSelectModule,
    MatSnackBarModule,
  ],
})
export class SharedModule {}
