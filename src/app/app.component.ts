import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Router} from '@angular/router';
import {mainActionButtons} from './main-action-buttons/main-actiion-button-mocked';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
  @ViewChild(MatSidenav)
  sidenav: MatSidenav;

  mainActionButtonMocked = mainActionButtons;


  constructor(private observer: BreakpointObserver, private router: Router) {
  }

  scrollToSection(section: string): void {
    document.getElementById(section).scrollIntoView({
      behavior: 'smooth'
    });
  }

}
