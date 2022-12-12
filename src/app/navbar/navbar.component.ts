import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isShowingCart: boolean = false;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
  }

  isCartEmpty() {
    return this.productService.getCount() == 0;
  }

  getTitle() {
    return this.productService.get().title;
  }

  getCount() {
    return this.productService.getCount();
  }

  getDiscountedPrice() {
    return this.productService.getDiscountedPrice();
  }

  getFinalPrice() {
    return this.productService.getFinalPrice();
  }

  deleteCheckout() {
    this.productService.setCount(0);
  }
}
