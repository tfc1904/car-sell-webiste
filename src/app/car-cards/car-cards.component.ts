import { Component, OnInit } from '@angular/core';
import { carDetailsMocked } from './car-details-mocked';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-cards',
  templateUrl: './car-cards.component.html',
  styleUrls: ['./car-cards.component.scss']
})
export class CarCardsComponent implements OnInit {

  carDetailsMockedData = carDetailsMocked;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showCarDetails(carId: string): void {
    if (carId) {
      this.router.navigate(['car-details'], {queryParams: {id: carId}});
    }
  }

}
