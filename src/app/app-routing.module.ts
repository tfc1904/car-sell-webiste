import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarCardsComponent} from './car-cards/car-cards.component';
import { FeedbackComponent } from './feedback/feedback.component';
import {ContactUsComponent} from './contact-us/contact-us.component';

const routes: Routes = [
  { path: 'feedback', component: FeedbackComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'cars', component: CarCardsComponent },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
