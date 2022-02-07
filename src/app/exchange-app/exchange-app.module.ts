import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangeComponent } from './exchange.component';


import { InfoComponent } from './info/info.component';
import { ConverterComponent } from './converter/converter.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ExchangeComponent,
    InfoComponent,
    ConverterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    ExchangeComponent
  ]
})
export class ExchangeAppModule { }
