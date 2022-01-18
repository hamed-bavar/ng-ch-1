import { FetchDataService } from './../services/fetch-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  constructor(private fd: FetchDataService) {}

  ngOnInit(): void {
    this.fd.getNumbersValue().subscribe((e) => console.log(e));
  }
}
