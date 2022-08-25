import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isShowingCheckout: boolean = false;
  isCheckoutEmpty: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }
}
