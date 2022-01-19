import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import {
  AddResponse,
  MultiplyResponse,
  NumbersResponse,
} from './Responses.interface';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  private MULTIPLY_URL = environment.MULTIPLY_URL;
  private ADD_URL = environment.ADD_URL;
  private NUMBERS_URL = environment.NUMBERS_URL;
  constructor(private http: HttpClient) {}
  getAddValue() {
    return this.http.get<AddResponse>(this.ADD_URL);
  }
  getMultiplyValue() {
    return this.http.get<MultiplyResponse>(this.MULTIPLY_URL);
  }
  getNumbersValue() {
    return this.http.get<NumbersResponse[]>(this.NUMBERS_URL);
  }
}
