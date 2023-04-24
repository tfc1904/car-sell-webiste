import { Component, OnInit } from '@angular/core';
import { OurServicesCard } from '../models/our-services-card';
import { ourServicesMocked } from './our-services-mocked';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {

  ourServicesContentMocked: OurServicesCard[] = ourServicesMocked;

  constructor() { }

  ngOnInit(): void {
  }

}
