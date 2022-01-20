import { LoadingService } from './core/services/loading.service';
import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'challenge1';
  constructor(private ls: LoadingService) {}
}
