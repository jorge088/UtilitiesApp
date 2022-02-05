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
      this.appBackColor="#3053AE";
      this.image="url('../../assets/cold.jpg')";
    }else if(parseInt(data.main.temp)>=16){
      this.appBackColor="#ff9800";
      this.image="url('../../assets/warm.jpg')";
    } 
  }
  getCurrentPosition(){
    setTimeout(()=>{
      this.getWeatherInfo(this.city);
    },1000);
    

  }



}
