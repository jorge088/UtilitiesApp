import { Component, HostBinding, OnInit } from '@angular/core';

import { WeatherService } from './weather.service'; //import the weather service

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  weatherInfo:any=[];

  city:string = "cordoba";
  appBackColor:string="";
  @HostBinding('style.background-image')  image : string ="";
  // @HostBinding('style.background-image')  image : string ="url('../../assets/warm.jpg')";

  constructor( private weather:WeatherService ) { 
  }

  ngOnInit(): void {
    this.weatherInfo={
      main:{}
    };
    this.getCurrentPosition();
    
  }

  getCurrentPosition(){
    this.getWeatherInfo(this.city);
  }

  getWeatherInfo(value:string){
    this.weather.getFromUserSelection(value).subscribe(data=>{
      setTimeout(() => {
        this.setWeatherData(data);
        this.getStyle();
      }, 1000);
    }); 
    
  }

  setWeatherData(data:any){
    this.weatherInfo = data;
    this.weatherInfo.country = this.weatherInfo.sys.country;
    this.weatherInfo.main.temp = String(parseInt(this.weatherInfo.main.temp) - 273);
    this.weatherInfo.main.temp_max = String(parseInt(this.weatherInfo.main.temp_max)-273);
    this.weatherInfo.main.temp_min = String(parseInt(this.weatherInfo.main.temp_min)-273);
    this.weatherInfo.windSpeed = this.weatherInfo.wind.speed;
    this.weatherInfo.cloudsPerc = this.weatherInfo.clouds.all;
  }

  getStyle(){
    if(parseInt(this.weatherInfo.main.temp)<16){
      this.appBackColor="linear-gradient(120deg, #3dc9f2 8%, #00a7dc 30%,#00a7dc 70%, #0199d2 90%)";
      this.image = "radial-gradient(circle farthest-side, #81c9fa 30%,#2196f3 100%)";
      // this.image = "url('../../assets/cold.jpg')";
    }else if(parseInt(this.weatherInfo.main.temp)>=16){
      this.appBackColor="linear-gradient(120deg, #ffde08 8%,#fcc632 30%, #ffae41 100%)";
      this.image="radial-gradient(circle farthest-side, #ffd06b 30%,#ffbd30 100%)";
      // this.image="url('../../assets/warm.jpg')"
    }
    console.log(this.weatherInfo);
  }
 



}
