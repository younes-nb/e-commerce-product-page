import {Injectable} from '@angular/core';
import Product from "../types/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private product: Product = {
    title: "Fall Limited Edition Sneakers",
    context: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: 250,
    discount: .5
  }

  private count: number = 0;

  constructor() {
  }

  get() {
    return this.product;
  }

  getCount() {
    return this.count;
  }

  setCount(count : number) {
    this.count = count;
  }

  getDiscountedPrice()  {
    return this.product.price * (1 - this.product.discount);
  }

  getFinalPrice() {
    return this.getDiscountedPrice() * this.count;
  }
}
