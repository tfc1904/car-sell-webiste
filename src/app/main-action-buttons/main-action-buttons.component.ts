import {Component, Input, OnInit} from '@angular/core';
import { mainActionButtons } from './main-actiion-button-mocked';
import {MainActionButton} from '../models/main-action-button';

@Component({
  selector: 'app-main-action-buttons',
  templateUrl: './main-action-buttons.component.html',
  styleUrls: ['./main-action-buttons.component.scss']
})
export class MainActionButtonsComponent implements OnInit {

  @Input() mainActionButtonsMocked: MainActionButton[];

  constructor() { }

  ngOnInit(): void {
    console.log('mainActionButtonsMocked ->', this.mainActionButtonsMocked);
  }

}
