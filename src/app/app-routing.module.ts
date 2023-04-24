import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarCardsComponent} from './car-cards/car-cards.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {OurServicesComponent} from './our-services/our-services.component';

const routes: Routes = [
  { path: 'our-services', component: OurServicesComponent },
  { path: 'car-details', component: CarDetailsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'cars', component: CarCardsComponent },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
