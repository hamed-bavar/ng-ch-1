import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  constructor() {}
  setLoading() {
    this.isLoading$.next(true);
  }
  removeLoading() {
    this.isLoading$.next(false);
  }
  getIsLoading() {
    return this.isLoading$;
  }
}
