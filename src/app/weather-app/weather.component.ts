import { Component, HostBinding, OnInit } from '@angular/core';

import { WeatherService } from './weather.service'; //import the weather service

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {

  weatherInfo:any=[];
  city:string = "San salvador de Jujuy";
  appBackColor:string="";
  @HostBinding('class.backgroundImgHot')  hotWeather = false;
  @HostBinding('class.backgroundImgCold')  coldWeather = false;

  constructor( private weather:WeatherService ) { 
  }

  ngOnInit(): void {
    this.getCurrentPosition();
  }
  getWeatherInfo(value:string){
    this.weather.getFromUserSelection(value).subscribe(data=>{
      this.weatherInfo = data;
      this.weatherInfo.main.temp = String(parseInt(this.weatherInfo.main.temp) - 273);
      this.weatherInfo.main.temp_max = String(parseInt(this.weatherInfo.main.temp_max)-273);
      this.weatherInfo.main.temp_min = String(parseInt(this.weatherInfo.main.temp_min)-273);
      setTimeout(()=>{
        this.getStyle(this.weatherInfo);
      },100); 
    });
  }
  getStyle(data:any){
    if(parseInt(data.main.temp)<16){
      this.appBackColor="#3053AE";
      this.hotWeather=false;
      this.coldWeather=true;
    }else if(parseInt(data.main.temp)>=16){
      this.appBackColor="#ff9800";
      this.coldWeather=false;
      this.hotWeather=true;
    } 
  }
  getCurrentPosition(){
    setTimeout(()=>{
      this.getWeatherInfo(this.city);
    },1000);
    

  }



}
