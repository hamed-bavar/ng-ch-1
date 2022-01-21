import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.value1 = 2;
    component.value2 = 7;
    component.result = 14;
    component.action = 'multiply';
    fixture.detectChanges();
  });
  it('should render card', () => {
    const div = fixture.debugElement.query(By.css('.operation')).nativeElement;
    expect(div.textContent).toBe(' 2 * 7 = 14 ');
  });
});
