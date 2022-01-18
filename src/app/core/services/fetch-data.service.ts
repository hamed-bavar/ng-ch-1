import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  MULTIPLY_URL = 'assets/Multiply.json';
  ADD_URL = 'assets/Add.json';
  NUMBERS_URL = 'assets/Numbers.json';
  constructor(private http: HttpClient) {}
  getAddValue() {}
  getMultiplyValue() {}
  getNumbersValue() {}
}
