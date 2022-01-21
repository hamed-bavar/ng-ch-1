import { SelectFilterComponent } from './../select-filter/select-filter.component';
import { CalculationService } from './../services/calculation.service';
import { HttpClientModule } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  NO_ERRORS_SCHEMA,
  Output,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardsComponent } from './cards.component';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

//mock app-select-filter component
@Component({
  selector: 'app-select-filter',
  template: `<mat-select
    (valueChange)="selectValueChanged($event)"
    [formControl]="selected"
  >
  </mat-select>`,
})
class FakeSelectFilterComponent implements Partial<SelectFilterComponent> {
  @Output() onSelectValue: EventEmitter<string> = new EventEmitter();
  selectValueChanged(value: string) {
    this.onSelectValue.emit(value);
  }
}
describe('CardsComponent ', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;
  let fakeCalculationService: CalculationService;
  let SelectFilter: SelectFilterComponent;
  beforeEach(async () => {
    fakeCalculationService = jasmine.createSpyObj<CalculationService>(
      'CalculationService',
      {
        getCardsData: of([
          { value1: 1, value2: 2, action: 'add', result: 3 },
          { value1: 1, value2: 2, action: 'multiply', result: 2 },
        ]),
      }
    );
    await TestBed.configureTestingModule({
      declarations: [CardsComponent, FakeSelectFilterComponent],
      imports: [HttpClientModule],
      providers: [
        { provide: CalculationService, useValue: fakeCalculationService },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const selectFilterEl = fixture.debugElement.query(
      By.directive(FakeSelectFilterComponent)
    );
    SelectFilter = selectFilterEl.componentInstance;
  });

  it('GetCardData should have been called', () => {
    expect(fakeCalculationService.getCardsData).toHaveBeenCalled();
  });

  it('Card data property value must be as expected', () => {
    expect(component.cardsData).toEqual([
      { value1: 1, value2: 2, action: 'add', result: 3 },
      { value1: 1, value2: 2, action: 'multiply', result: 2 },
    ]);
  });

  it('renders a select filter component', () => {
    expect(SelectFilter).toBeTruthy();
  });

  it('after emit the onSelectValue function , cards component should call getCardsdata in calculation service', () => {
    const selectElement: HTMLSelectElement = fixture.debugElement.query(
      By.css('mat-select')
    ).nativeElement;
    selectElement.value = 'add';
    selectElement.dispatchEvent(new Event('valueChange'));
    fixture.detectChanges();
    expect(fakeCalculationService.getCardsData).toHaveBeenCalled();
  });
  it('must render cards correctly', () => {
    const cards = fixture.debugElement.queryAll(By.css('app-card'));
    expect(cards.length).toEqual(2);
  });
});
