import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent {

  title: string = "Switch component";
  backgroundColor : string = "white";
  backgroundColor2 : string = "white";

  constructor() { }

  sayYes(){
    console.log("1")
    this.backgroundColor = "green";
  }
  sayNo(){
    console.log("0")
    this.backgroundColor2 = "red";
  }

}
