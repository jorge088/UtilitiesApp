import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

  @Input() dollarInfo:any;

  constructor() { }

  ngOnInit(): void {
  }

}
