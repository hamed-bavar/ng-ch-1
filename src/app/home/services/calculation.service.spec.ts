import { OperationsType } from './../../shared/types/Operations.interface';
import { FetchDataService } from './http/fetch-data.service';
import { TestBed } from '@angular/core/testing';

import { CalculationService } from './calculation.service';
import { of } from 'rxjs';

const ADD_RESULT: OperationsType[] = [
  { value1: 1, value2: 5, action: 'add', result: 6 },
];
const MULTIPLY_RESULT: OperationsType[] = [
  { value1: 2, value2: 10, action: 'multiply', result: 20 },
];
const ALL_RESULT: OperationsType[] = [...ADD_RESULT, ...MULTIPLY_RESULT];

describe('CalculationService', () => {
  let service: CalculationService;
  let fakeFetchDataService: Pick<FetchDataService, keyof FetchDataService>;

  beforeEach(() => {
    fakeFetchDataService = jasmine.createSpyObj<FetchDataService>(
      'FetchDataService',
      {
        getAddValue: of({ value: 5 }),
        getMultiplyValue: of({ value: 10 }),
        getNumberAndAction: of([
          { value: 1, action: 'add' },
          { value: 2, action: 'multiply' },
        ]),
      }
    );
    TestBed.configureTestingModule({
      providers: [
        CalculationService,
        { provide: FetchDataService, useValue: fakeFetchDataService },
      ],
    });
    service = TestBed.inject(CalculationService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should calulate all operations as expected', () => {
    let actualOperationValues: OperationsType[] | undefined;
    service.getCardsData('all').subscribe((data) => {
      actualOperationValues = data;
    });
    expect(actualOperationValues).toEqual(ALL_RESULT);
  });
  it('should calulate add operations as expected', () => {
    let actualOperationValues: OperationsType[] | undefined;
    service.getCardsData('add').subscribe((data) => {
      actualOperationValues = data;
    });
    expect(actualOperationValues).toEqual(ADD_RESULT);
  });
  it('should calulate multiply operations as expected', () => {
    let actualOperationValues: OperationsType[] | undefined;
    service.getCardsData('multiply').subscribe((data) => {
      actualOperationValues = data;
    });
    expect(actualOperationValues).toEqual(MULTIPLY_RESULT);
  });
});
