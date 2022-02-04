import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangeComponent } from './exchange.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ExchangeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ExchangeComponent
  ]
})
export class ExchangeAppModule { }
