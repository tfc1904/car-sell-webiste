import { Component, OnInit } from '@angular/core';
import { mainActionButtons } from '../main-action-buttons/main-actiion-button-mocked';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  mainActionButtonMocked = mainActionButtons;

  constructor() { }

  ngOnInit(): void {
    console.log('mainActionButtonMocked contact us ->', this.mainActionButtonMocked);
  }

}
