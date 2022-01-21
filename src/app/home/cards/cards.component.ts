import { ICard } from './../../shared/types/Card.interface';
import { LoadingService } from '../../shared/services/loading.service';
import { CalculationService } from './../services/calculation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  cardsData: ICard[] = [];
  constructor(
    private calculationService: CalculationService,
    private ls: LoadingService
  ) {}

  ngOnInit(): void {
    this.getCardsData('all');
  }
  onSelectValue(filter: string) {
    this.getCardsData(filter);
  }
  getCardsData = (filter: string) => {
    this.ls.setLoading();
    this.calculationService.getCardsData(filter).subscribe((items) => {
      this.cardsData = items;
      this.ls.removeLoading();
    });
  };
}
