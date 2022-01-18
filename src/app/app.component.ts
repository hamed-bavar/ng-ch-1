import { LoadingService } from './core/services/loading.service';
import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isloading$: Observable<boolean>;
  constructor(private ls: LoadingService) {
    this.isloading$ = this.ls.isLoading$;
  }
  title = 'challenge1';
}
