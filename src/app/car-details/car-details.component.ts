import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CarDetails } from '../models/car-details';
import { carDetailsMocked } from '../car-cards/car-details-mocked';


@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {

  carId: string;
  filteredCarId: CarDetails[];

  constructor(private router: Router,
              private route: ActivatedRoute) {
    this.carId = this.route.snapshot.queryParams.id;
  }

  ngOnInit(): void {
    this.filteredCarId = this.getCarById(carDetailsMocked, this.carId);
    console.log(this.filteredCarId);
  }

  getCarById(availableCarsList: CarDetails[], carId: string): CarDetails[] {
    if (availableCarsList.length && carId) {
      return availableCarsList.filter(car => car.id === carId);
    }
  }

}
