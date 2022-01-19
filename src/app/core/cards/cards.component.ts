import { CalculationService } from './../services/calculation.service';
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
  constructor(private calculationService: CalculationService) {}

  ngOnInit(): void {
    this.getCardsData('all');
  }
  onSelectValue(filter: string) {
    this.getCardsData(filter);
  }
  getCardsData = (filter: string) => {
    this.calculationService.getCardsData(filter).subscribe((items) => {
      console.log(items);
    });
  };
}
