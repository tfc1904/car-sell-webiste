import {Component, Input, OnInit} from '@angular/core';
import {OurServicesCard} from '../models/our-services-card';

@Component({
  selector: 'app-our-services-card',
  templateUrl: './our-services-card.component.html',
  styleUrls: ['./our-services-card.component.scss']
})
export class OurServicesCardComponent implements OnInit {

  @Input() ourServicesMocked: OurServicesCard[];

  constructor() { }

  ngOnInit(): void {
  }

}
