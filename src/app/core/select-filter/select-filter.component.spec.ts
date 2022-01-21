import { NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SelectFilterComponent } from './select-filter.component';
interface Event {
  target: {
    value: string;
  };
}
describe('SelectFilterComponent', () => {
  let component: SelectFilterComponent;
  let fixture: ComponentFixture<SelectFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectFilterComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  it('should emit changed value to parent component', () => {
    // //test angular material select option
    let selectValue: string | undefined;
    component.onSelectValue.subscribe((event: Event) => {
      selectValue = event.target['value'];
    });
    const selectElement: HTMLSelectElement = fixture.debugElement.query(
      By.css('mat-select')
    ).nativeElement;
    selectElement.value = 'add';
    selectElement.dispatchEvent(new Event('valueChange'));
    fixture.detectChanges();
    expect(selectValue).toEqual('add');
  });
});
