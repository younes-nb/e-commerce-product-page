import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";

@Component({
  selector: 'app-context',
  templateUrl: './context.component.html',
  styleUrls: ['./context.component.scss']
})
export class ContextComponent implements OnInit {

  private count = 0;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
  }

  decreaseCount() {
    return this.count-- ? this.count : this.count = 0;
  }

  increaseCount() {
    return ++this.count;
  }

  getCount() {
    return this.count;
  }

  getProduct() {
    return this.productService.get();
  }

  getDiscountedPrice() {
    return this.productService.getDiscountedPrice();
  }

  addToCart() {
    this.productService.setCount(this.getCount());
  }
}
