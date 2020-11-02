import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  title: string = "Carousel component";
  altText: string = "photo d'un loup";
  altText2: string = "photo d'un ours";
  altText3: string = "photo d'un dauphin";
  carousel = [ 
    {srcPath : "https://www.lafranceagricole.fr/ra/lowres/Publie/FA/p1/Images/Web/2020-10-30/loup-kdPG-U103019894987hND-860x420%40lafranceagricole.fr.JPG"},
    {srcPath : "https://france3-regions.francetvinfo.fr/image/Hv5x0cOlTuqe-Iczo4C7g3Jzf2M/600x400/regions/2020/08/21/5f3f94b76ab54_maxnewsfrfour175727_1-4969296.jpg"},
    {srcPath : "https://img.huffingtonpost.com/asset/5ccd7d9d23000037009aaa6f.jpeg?ops=1778_1000"},
  ];
  authenticated: boolean = true;


  constructor() { }

  updateCarousel(){
    setTimeout(()=>{
      console.log('photo suivante')
      this.authenticated  = !this.authenticated;
    },5000)
  }

}
