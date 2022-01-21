import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [LoadingComponent],
  imports: [CommonModule, RouterModule],
  exports: [MatSelectModule, MatSnackBarModule, LoadingComponent],
})
export class SharedModule {}
