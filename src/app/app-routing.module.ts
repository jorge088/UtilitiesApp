import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeComponent } from './exchange-app/exchange.component';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather-app/weather.component';

const routes: Routes = [
  { path: '', component : HomeComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'exchange', component: ExchangeComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
