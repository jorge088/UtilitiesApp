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
      this.dollarInfo=data;
      console.log(this.dollarInfo);
    });
  }

}
