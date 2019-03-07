import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.css']
})
export class DataInputComponent implements OnInit {
  ServerName;
  ServerPoint
  constructor() { }

  ngOnInit() {
  }

  addServer(){

  }
  addPint(x) {
this.ServerName = x;
this.ServerPoint= x;
 console.log(x , 'xData')
  }
}


