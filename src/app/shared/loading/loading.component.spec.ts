import { BehaviorSubject } from 'rxjs';
import { LoadingService } from './../services/loading.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingComponent } from './loading.component';
import { By } from '@angular/platform-browser';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;
  let fakeIsLoading$: BehaviorSubject<boolean>;
  let fakeLoadingService: Pick<LoadingService, keyof LoadingService>;
  beforeEach(async () => {
    fakeIsLoading$ = new BehaviorSubject<boolean>(false);
    fakeLoadingService = {
      setLoading(): void {
        fakeIsLoading$.next(true);
      },
      removeLoading(): void {
        fakeIsLoading$.next(false);
      },
      getIsLoading(): BehaviorSubject<boolean> {
        return fakeIsLoading$;
      },
    };
    spyOn(fakeLoadingService, 'setLoading').and.callThrough();
    spyOn(fakeLoadingService, 'removeLoading').and.callThrough();
    spyOn(fakeLoadingService, 'getIsLoading').and.callThrough();

    await TestBed.configureTestingModule({
      declarations: [LoadingComponent],
      providers: [{ provide: LoadingComponent, useValue: fakeLoadingService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render loading spinner', () => {
    component.loading$ = fakeLoadingService.getIsLoading();
    fakeIsLoading$.next(true);
    fixture.detectChanges();
    const spinner = fixture.debugElement.query(
      By.css('.lds-grid')
    ).nativeElement;
    expect(spinner).toBeTruthy();
  });
  it('should not render loading spinner', () => {
    component.loading$ = fakeLoadingService.getIsLoading();
    fakeIsLoading$.next(false);
    fixture.detectChanges();
    const spinner = fixture.debugElement.query(
      By.css('.lds-grid')
    )?.nativeElement;
    expect(spinner).toBe(undefined);
  });
});
