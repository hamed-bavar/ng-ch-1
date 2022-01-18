import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  MULTIPLY_URL = environment.MULTIPLY_URL;
  ADD_URL = environment.ADD_URL;
  NUMBERS_URL = environment.NUMBERS_URL;
  constructor(private http: HttpClient) {}
  getAddValue() {
    return this.http.get(this.ADD_URL);
  }
  getMultiplyValue() {
    return this.http.get(this.MULTIPLY_URL);
  }
  getNumbersValue() {
    return this.http.get(this.NUMBERS_URL);
  }
}
