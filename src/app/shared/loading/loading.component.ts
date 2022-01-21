import { Observable } from 'rxjs';
import { LoadingService } from '../services/loading.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  loading$: Observable<boolean>;
  constructor(private ls: LoadingService) {
    this.loading$ = this.ls.isLoading$;
  }

  ngOnInit(): void {}
}
