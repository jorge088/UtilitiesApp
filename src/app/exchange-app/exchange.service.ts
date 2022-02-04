import { Injectable } from '@angular/core';

import { HttpClient, } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  url:string ="https://mercados.ambito.com/dolar/informal/variacion";
  constructor(private http:HttpClient) { }

  getFromApi(){
    return this.http.get(this.url);
  }
}
