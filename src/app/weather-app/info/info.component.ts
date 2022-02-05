import { Component, OnInit, AfterViewInit , Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  @Input() weatherInfo:any;
  city:string="";
  temp:string="";
  constructor() { }

  ngOnInit(): void {    
    

    
  }
  setValues(){  
  }

  ngAfterViewInit():void{
  }
}
