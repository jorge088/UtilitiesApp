import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey:string ="e701a532701479b60c02d39b4d58395c";
  url:string ="";
  constructor( private http:HttpClient ) { }
  
  getFromUserSelection(city:string ){
    this.url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`;
    return this.http.get(this.url);
  }
}
