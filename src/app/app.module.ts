import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MonstersComponent } from './monsters/monsters.component';
import { CarCardsComponent } from './car-cards/car-cards.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    MonstersComponent,
    CarCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
