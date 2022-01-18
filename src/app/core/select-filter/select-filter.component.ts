import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-filter',
  templateUrl: './select-filter.component.html',
  styleUrls: ['./select-filter.component.scss'],
})
export class SelectFilterComponent implements OnInit {
  @Output() onSelectValue: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  selectValueChanged(value: string) {
    this.onSelectValue.emit(value);
  }
}
