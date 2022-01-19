import { FetchDataService } from './http/fetch-data.service';
import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalculationService {
  constructor(private fetchDataService: FetchDataService) {}

  getValuesByfilter(filter: string) {
    if (filter === 'add') {
      return this.fetchDataService.getAddValue();
    } else if (filter === 'multiply') {
      return this.fetchDataService.getMultiplyValue();
    } else {
      return combineLatest(
        this.fetchDataService.getMultiplyValue(),
        this.fetchDataService.getAddValue()
      );
    }
  }
}
