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
    searchCity: new FormControl('',
    [
    Validators.pattern("[a-zA-Z]*"), //only allow characters
    Validators.required
    ])
  });
  

  getSearch(){
    // console.log("validez:" + this.searchForm.valid);
    if( this.searchForm.valid){
      this.searchValue.emit((this.searchForm.value).search); 
    }
  }

  onEnter(evt:any){
    // console.log("validez:" + this.searchForm.valid);
    evt.preventDefault();
    if(this.searchForm.valid){
      this.searchValue.emit(evt.target.value);
    }
  }

  get city(){
    return this.searchForm.get('searchCity');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
