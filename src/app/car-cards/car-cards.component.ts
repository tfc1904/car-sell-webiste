import { Component, OnInit } from '@angular/core';
import { carDetailsMocked } from './car-details-mocked';

@Component({
  selector: 'app-car-cards',
  templateUrl: './car-cards.component.html',
  styleUrls: ['./car-cards.component.scss']
})
export class CarCardsComponent implements OnInit {

  carDetailsMockedData = carDetailsMocked;

  constructor() { }

  ngOnInit(): void {
    console.log('carDetailsMockedData -', this.carDetailsMockedData);
  }

}
