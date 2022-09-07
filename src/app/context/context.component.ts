import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";

@Component({
  selector: 'app-context',
  templateUrl: './context.component.html',
  styleUrls: ['./context.component.scss']
})
export class ContextComponent implements OnInit {

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
  }

  decreaseCount() {
    this.productService.decrease();
  }

  increaseCount() {
    this.productService.increase();
  }

  getCount() {
    return this.productService.getCount();
  }

  getProduct() {
    return this.productService.get();
  }

  getDiscountedPrice() {
    return this.productService.getDiscountedPrice();
  }
}
