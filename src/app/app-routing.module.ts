import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {MonstersComponent} from './monsters/monsters.component';
import {CarCardsComponent} from './car-cards/car-cards.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'monsters', component: MonstersComponent },
  { path: 'cars', component: CarCardsComponent },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
