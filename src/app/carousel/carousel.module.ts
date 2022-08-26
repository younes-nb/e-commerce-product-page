import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselService} from "./carousel.service";
import {CarouselComponent} from "./carousel.component";


@NgModule({
  declarations: [CarouselComponent],
  providers: [CarouselService],
  imports: [CommonModule],
  exports: [CarouselComponent]
})
export class CarouselModule {
}
