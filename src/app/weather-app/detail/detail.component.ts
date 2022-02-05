import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() weatherInfo:any;
  constructor() { }
  // temp_min:string="";
  // temp_max:string="";
  // winterSpeed:string="";
  // cloudsPerc:string="";
  // humidity:string="";
  // pressure:string="";
  ngOnInit(): void {
    
  }
  ngOnChanges():void{
    
  }
  

}
