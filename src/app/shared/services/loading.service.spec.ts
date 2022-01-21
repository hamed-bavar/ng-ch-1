import { TestBed } from '@angular/core/testing';

import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should set loading=true', () => {
    let actualLoading: boolean | undefined;
    service.getIsLoading().subscribe((isLoading) => {
      actualLoading = isLoading;
    });
    service.setLoading();
    expect(actualLoading).toBe(true);
  });
  it('should set loading=false', () => {
    let actualLoading: boolean | undefined;
    service.getIsLoading().subscribe((isLoading) => {
      actualLoading = isLoading;
    });
    service.removeLoading();
    expect(actualLoading).toBe(false);
    expect(service.getIsLoading().value).toBe(false);
  });
});
