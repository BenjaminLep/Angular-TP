import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  title: string = "header component";
  altText: string = "photo d'un loup";
  srcPath: string = "https://www.lafranceagricole.fr/ra/lowres/Publie/FA/p1/Images/Web/2020-10-30/loup-kdPG-U103019894987hND-860x420%40lafranceagricole.fr.JPG";
  authenticated: boolean = false;
  options: string[] = ["rouge", "vert", "orange"];
  imageBorderColor : string = "black";

  constructor() { 
  }

  updateUi(){
    setTimeout(()=>{
      console.log('updateUi')
    this.title += ' updated';
    this.authenticated  = !this.authenticated;
    this.options.push("option 4")
    },100)
  }
  
  onChange(event: any){
    let value: string = event.target.value;
    console.log(value);
    this.imageBorderColor = value;
  }

}
