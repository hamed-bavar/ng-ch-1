import { FetchDataService } from '../services/http/fetch-data.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  cardsData = [];
  constructor(private fd: FetchDataService) {}

  ngOnInit(): void {}
  onSelectValue(value: string) {
    console.log(value);
  }
  getCardsData = () => {};
}
