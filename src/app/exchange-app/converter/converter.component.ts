import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

  @Input() dollarInfo:any;
  dollarAmountConverted : number = 0;
  argsAmountConverted : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  converterCalc = new FormGroup({
    dollarAmount : new FormControl('',[
      Validators.required,
      Validators.pattern("^[0-9]*$")
    ]),
    argAmount : new FormControl('',[
      Validators.required,
      Validators.pattern("^[0-9]*$")
    ])
  }); 

  convertDollarToArg(){ // convert the usd input to arg pesos
    if((this.converterCalc.value).dollarAmount != null){

      //make the pass to dollar and set only 2 decimals number
      this.argsAmountConverted = parseInt(this.dollarInfo.compra) * (this.converterCalc.value).dollarAmount;
      this.argsAmountConverted = parseFloat(this.argsAmountConverted.toFixed(2));

      //update the dollar amount to dislay and set only 2 decimals number
      this.dollarAmountConverted = (this.converterCalc.value).dollarAmount;
      this.dollarAmountConverted = parseFloat(this.dollarAmountConverted.toFixed(2));

      }else{  //input empty, set to 0 de amounts

        this.argsAmountConverted=0; 
        this.dollarAmountConverted=0;
    }
  }
  convertArgToDollar(){  //convert the args pesos input to usd
    if((this.converterCalc.value).argAmount != null){

      //make the pass to usd and set only 2 decimals number
      this.dollarAmountConverted = (this.converterCalc.value).argAmount / parseInt(this.dollarInfo.compra);
      this.dollarAmountConverted = parseFloat(this.dollarAmountConverted.toFixed(2));

      //update de args pesos amount and set only 2 decimals number
      this.argsAmountConverted = (this.converterCalc.value).argAmount;
      this.argsAmountConverted= parseFloat(this.argsAmountConverted.toFixed(2));

    }else{  //input empty, set to 0 de amounts
      this.argsAmountConverted=0;
      this.dollarAmountConverted=0;
    }
  }

  onEnter(evt:any){
    evt.preventDefault(); //Dont refresh the page on enter
  }

}
