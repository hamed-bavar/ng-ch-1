import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() value1: number;
  @Input() value2: number;
  @Input() result: number;
  @Input() action: 'add' | 'multiply';
  constructor() {}

  ngOnInit(): void {}
}
