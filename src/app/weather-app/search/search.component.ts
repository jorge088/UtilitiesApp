import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searchValue: EventEmitter<string> = new EventEmitter();

  searchForm = new FormGroup({
    search: new FormControl("",[Validators.pattern("[a-zA-Z]*")])//only allow characters
  });
  get f(){return this.searchForm.controls}

  getSearch(){
    this.searchValue.emit((this.searchForm.value).search);
  }
  onEnter(evt:any){
    evt.preventDefault();
    this.searchValue.emit(evt.target.value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
