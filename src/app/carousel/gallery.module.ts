import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GalleryService} from "./gallery.service";
import {GalleryComponent} from "./gallery.component";
import {NgImageSliderModule} from "ng-image-slider";


@NgModule({
  declarations: [GalleryComponent],
  providers: [GalleryService],
  imports: [
    CommonModule,
    NgImageSliderModule
  ],
  exports: [GalleryComponent]
})
export class GalleryModule {
}
