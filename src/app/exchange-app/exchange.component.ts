import { Component, OnInit } from '@angular/core';
import { ExchangeService } from './exchange.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {
  dollarInfo:any=[];
  
  constructor(private exchange:ExchangeService) { }

  ngOnInit(): void {
    this.getDollarInfo()
  }

  getDollarInfo(){
    this.exchange.getFromApi().subscribe(data=>{
      setTimeout(() => {
        this.setDollarInfo(data);
      }, 500);
      let date = new Date("2022-02-08");
    });
  }
  setDollarInfo(data:any){
    this.dollarInfo=data;
    this.dollarInfo.fecha=this.dollarInfo.fecha.slice(0,10);
  }

}
