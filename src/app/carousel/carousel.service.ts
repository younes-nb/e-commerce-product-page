import Image from "../../types/image";

export class CarouselService {

  constructor() {
  }

  private images: Image[] = [
    {
      largeImageSrc: "../../assets/images/image-product-1.jpg",
      thumbnailImageSrc: "../../assets/images/image-product-1-thumbnail.jpg",
      isSelected: true
    },
    {
      largeImageSrc: "../../assets/images/image-product-2.jpg",
      thumbnailImageSrc: "../../assets/images/image-product-2-thumbnail.jpg",
      isSelected: false
    },
    {
      largeImageSrc: "../../assets/images/image-product-3.jpg",
      thumbnailImageSrc: "../../assets/images/image-product-3-thumbnail.jpg",
      isSelected: false
    },
    {
      largeImageSrc: "../../assets/images/image-product-4.jpg",
      thumbnailImageSrc: "../../assets/images/image-product-4-thumbnail.jpg",
      isSelected: false
    }
  ]

  private mainImage = this.images[0].largeImageSrc;

  get() {
    return this.images;
  }

  getMain() {
    return this.mainImage;
  }

  setMain(index: number) {
    this.mainImage = this.images[index].largeImageSrc;
    for (let i = 0; i < this.images.length; i++) {
      this.images[i].isSelected = i === index;
    }
  }


}
