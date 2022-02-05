import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';

import { SearchComponent } from './search/search.component';
import { InfoComponent } from './info/info.component';
import { DetailComponent } from './detail/detail.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    WeatherComponent,
    SearchComponent,
    InfoComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    WeatherComponent
  ]
})
export class WeatherAppModule { }
