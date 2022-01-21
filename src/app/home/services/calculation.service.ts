import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';
import {
  forkJoin,
  switchMap,
  Observable,
  map,
  pluck,
  mergeMap,
  of,
  toArray,
} from 'rxjs';
import { FetchDataService } from './http/fetch-data.service';
import { INumbersResponse } from 'src/app/shared/types/Responses.interface';
@Injectable({
  providedIn: 'root',
})
export class CalculationService {
  constructor(private fetchDataService: FetchDataService) {}

  private getValuesByfilter(filter: string): Observable<[number, number]> {
    switch (filter) {
      case 'add':
        return this.fetchDataService.getAddValue().pipe(
          pluck('value'),
          map((item) => [0, item])
        );
      case 'multiply':
        return this.fetchDataService.getMultiplyValue().pipe(
          pluck('value'),
          map((item) => [item, 0])
        );
      default:
        return forkJoin([
          this.fetchDataService.getMultiplyValue().pipe(pluck('value')),
          this.fetchDataService.getAddValue().pipe(pluck('value')),
        ]);
    }
  }
  getCardsData(filterOperations: string) {
    return this.getValuesByfilter(filterOperations).pipe(
      switchMap(([multiplyValue, addValue]) => {
        return this.fetchDataService.getNumbersValue().pipe(
          mergeMap((items) => of(...items)),
          filter(
            (item: INumbersResponse) =>
              item.action === filterOperations || filterOperations === 'all'
          ),
          map((currentItem) => {
            return currentItem.action === 'multiply'
              ? {
                  value1: currentItem.value,
                  action: currentItem.action,
                  value2: multiplyValue,
                  result: currentItem.value * multiplyValue,
                }
              : {
                  value1: currentItem.value,
                  action: currentItem.action,
                  value2: addValue,
                  result: currentItem.value + addValue,
                };
          }),
          toArray()
        );
      })
    );
  }
}
