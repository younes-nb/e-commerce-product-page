import {Component, OnInit} from '@angular/core';
import {GalleryService} from "./gallery.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  showMask: boolean = false;
  currentLightboxIndex: number = 0;

  constructor(private galleryService: GalleryService) {
  }

  ngOnInit(): void {
  }

  getImages() {
    return this.galleryService.get();
  }

  getMainGalleryImage() {
    return this.galleryService.getMainGalleryImage();
  }

  getMainLightboxImage() {
    return this.galleryService.getMainLightboxImage();
  }

  setGalleryMainImage(index: number) {
    this.galleryService.setGalleryMain(index);
  }

  setLightboxMainImage(index: number) {
    this.currentLightboxIndex = index;
    this.galleryService.setLightboxMain(index);
  }

  previousLightboxImage() {
    this.currentLightboxIndex--;
    if (this.currentLightboxIndex < 0) {
      this.currentLightboxIndex += this.galleryService.count();
    }
    this.galleryService.setLightboxMain(this.currentLightboxIndex)
  }

  nextLightboxImage() {
    this.currentLightboxIndex++;
    if (this.currentLightboxIndex >= this.galleryService.count()) {
      this.currentLightboxIndex -= this.galleryService.count();
    }
    this.galleryService.setLightboxMain(this.currentLightboxIndex)
  }

  onPreviewImage() {
    this.showMask = !this.showMask;
  }
}
