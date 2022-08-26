import {Component, OnInit} from '@angular/core';
import {CarouselService} from "./carousel.service";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor(private carouselService: CarouselService) {
  }

  ngOnInit(): void {
  }

  getImages() {
    return this.carouselService.get();
  }

  getMainImage(){
    return this.carouselService.getMain();
  }

  setMainImage(index: number) {
    this.carouselService.setMain(index);
  }
}
