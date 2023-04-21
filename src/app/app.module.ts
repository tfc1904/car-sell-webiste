import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarCardsComponent } from './car-cards/car-cards.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import { MainActionButtonsComponent } from './main-action-buttons/main-action-buttons.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import { SocialMediaButtonsComponent } from './social-media-buttons/social-media-buttons.component';


@NgModule({
  declarations: [
    AppComponent,
    CarCardsComponent,
    CarDetailsComponent,
    ContactUsComponent,
    MainActionButtonsComponent,
    SocialMediaButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
