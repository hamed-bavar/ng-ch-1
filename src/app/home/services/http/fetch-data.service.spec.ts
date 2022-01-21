import {
  IAddResponse,
  IMultiplyResponse,
  INumbersResponse,
} from './../../../shared/types/Responses.interface';
import { TestBed } from '@angular/core/testing';
import { FetchDataService } from './fetch-data.service';
import { environment } from 'src/environments/environment';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';
const ADD_VALUE: IAddResponse = { value: 5 };
const MULTIPLY_VALUE: IMultiplyResponse = { value: 10 };
const NUMBERS_ACTION_VALUE: INumbersResponse[] = [
  { value: 1, action: 'add' },
  { value: 2, action: 'multiply' },
  { value: 5, action: 'multiply' },
  { value: 2, action: 'add' },
];
describe('FetchDataService', () => {
  let service: FetchDataService;
  let controller: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FetchDataService],
    });
    service = TestBed.inject(FetchDataService);
    controller = TestBed.inject(HttpTestingController);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Should get add operation  value from getAddValue function ', () => {
    let actualAddValue: IAddResponse | undefined;
    service.getAddValue().subscribe((data) => {
      actualAddValue = data;
    });
    const req = controller.expectOne(environment.ADD_URL);
    req.flush(ADD_VALUE);
    controller.verify();
    expect(actualAddValue).toEqual(ADD_VALUE);
  });
  it('Should get multiply operation value from getMultiplyValue function', () => {
    let actualMultiplyValue: IMultiplyResponse | undefined;
    service.getMultiplyValue().subscribe((data) => {
      actualMultiplyValue = data;
    });
    const req = controller.expectOne(environment.MULTIPLY_URL);
    req.flush(MULTIPLY_VALUE);
    controller.verify();
    expect(actualMultiplyValue).toEqual(MULTIPLY_VALUE);
  });
  it('Should get numbers and action from getNumberAndAction function', () => {
    let getNumberAndAction: INumbersResponse[] | undefined;
    service.getNumberAndAction().subscribe((data) => {
      getNumberAndAction = data;
    });
    const req = controller.expectOne(environment.NUMBERS_URL);
    req.flush(NUMBERS_ACTION_VALUE);
    controller.verify();
    expect(getNumberAndAction).toEqual(NUMBERS_ACTION_VALUE);
  });
  it('it should show MISSING DATA after Failure of getAddValue request', () => {
    const status = 404;
    const statusText = 'MISSING DATA';
    const errorEvent = new ErrorEvent('API error');
    let actualError: HttpErrorResponse | undefined;
    service.getAddValue().subscribe({
      next: () => {
        fail('next handler must not be called');
      },
      error: (error) => {
        actualError = error;
      },
      complete: () => {
        fail('complete handler must not be called');
      },
    });
    controller
      .expectOne(environment.ADD_URL)
      .error(errorEvent, { status, statusText });
    if (!actualError) {
      throw new Error('Error needs to be defined');
    }
    expect(actualError.error).toBe(errorEvent);
    expect(actualError.status).toBe(status);
    expect(actualError.statusText).toBe(statusText);
  });
  it('it should show MISSING DATA after Failure of getMultiply request', () => {
    const status = 404;
    const statusText = 'MISSING DATA';
    const errorEvent = new ErrorEvent('API error');
    let actualError: HttpErrorResponse | undefined;
    service.getMultiplyValue().subscribe({
      next: () => {
        fail('next handler must not be called');
      },
      error: (error) => {
        actualError = error;
      },
      complete: () => {
        fail('complete handler must not be called');
      },
    });
    controller
      .expectOne(environment.MULTIPLY_URL)
      .error(errorEvent, { status, statusText });
    if (!actualError) {
      throw new Error('Error needs to be defined');
    }
    expect(actualError.error).toBe(errorEvent);
    expect(actualError.status).toBe(status);
    expect(actualError.statusText).toBe(statusText);
  });
  it('it should show SERVER ERROR after Failure of getAddValueOption request', () => {
    const status = 404;
    const statusText = 'SERVER ERROR';
    const errorEvent = new ErrorEvent('API error');
    let actualError: HttpErrorResponse | undefined;
    service.getNumberAndAction().subscribe({
      next: () => {
        fail('next handler must not be called');
      },
      error: (error) => {
        actualError = error;
      },
      complete: () => {
        fail('complete handler must not be called');
      },
    });
    controller
      .expectOne(environment.NUMBERS_URL)
      .error(errorEvent, { status, statusText });
    if (!actualError) {
      throw new Error('Error needs to be defined');
    }
    expect(actualError.error).toBe(errorEvent);
    expect(actualError.status).toBe(status);
    expect(actualError.statusText).toBe(statusText);
  });
});
