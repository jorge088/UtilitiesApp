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
  @HostBinding('style.background-image')  image !: string;

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
      },300); 
    });
    
  }

  getStyle(data:any){
    if(parseInt(data.main.temp)<16){
      this.appBackColor="linear-gradient(120deg, #3dc9f2 8%, #00a7dc 30%,#00a7dc 70%, #0199d2 90%)";
      this.image="radial-gradient(circle farthest-side, #81c9fa 30%,#2196f3 100%)";
    }else if(parseInt(data.main.temp)>=16){
      this.appBackColor="linear-gradient(120deg, #fddd11 8%,#fcc632 30%, #ffae41 100%)";
      this.image="radial-gradient(circle farthest-side, #ffd06b 30%,#ffbd30 100%)";
    } 
  }
  getCurrentPosition(){
    setTimeout(()=>{
      this.getWeatherInfo(this.city);
    },1000);
    

  }



}
