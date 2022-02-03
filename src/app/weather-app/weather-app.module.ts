import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { SearchComponent } from './search/search.component';
import { InfoComponent } from './info/info.component';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [
    WeatherComponent,
    SearchComponent,
    InfoComponent,
    DetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WeatherComponent
  ]
})
export class WeatherAppModule { }
