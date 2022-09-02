import Image from "../../types/image";

export class GalleryService {

  constructor() {
  }

  private images: Image[] = [
    {
      image: "../../assets/images/image-product-1.jpg",
      thumbImage: "../../assets/images/image-product-1-thumbnail.jpg",
      isSelectedInGallery: true,
      isSelectedInLightbox: true
    },
    {
      image: "../../assets/images/image-product-2.jpg",
      thumbImage: "../../assets/images/image-product-2-thumbnail.jpg",
      isSelectedInGallery: false,
      isSelectedInLightbox: false
    },
    {
      image: "../../assets/images/image-product-3.jpg",
      thumbImage: "../../assets/images/image-product-3-thumbnail.jpg",
      isSelectedInGallery: false,
      isSelectedInLightbox: false
    },
    {
      image: "../../assets/images/image-product-4.jpg",
      thumbImage: "../../assets/images/image-product-4-thumbnail.jpg",
      isSelectedInGallery: false,
      isSelectedInLightbox: false
    }
  ]

  private mainGalleryImage = this.images[0].image;
  private mainLightboxImage = this.images[0].image;

  get() {
    return this.images;
  }

  count() {
    return this.images.length;
  }

  getMainGalleryImage() {
    return this.mainGalleryImage;
  }

  getMainLightboxImage() {
    return this.mainLightboxImage
  }

  setGalleryMain(index: number) {
    this.mainGalleryImage = this.images[index].image;
    this.mainLightboxImage = this.mainGalleryImage;
    for (let i = 0; i < this.images.length; i++) {
      this.images[i].isSelectedInGallery = i === index;
      this.images[i].isSelectedInLightbox = this.images[i].isSelectedInGallery;
    }
  }

  setLightboxMain(index: number) {
    this.mainLightboxImage = this.images[index].image;
    for (let i = 0; i < this.images.length; i++) {
      this.images[i].isSelectedInLightbox = i === index;
    }
  }


}
