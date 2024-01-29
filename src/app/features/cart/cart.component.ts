import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  constructor(
    private router: Router,
    private ac: ActivatedRoute,
    private location: Location,
  ) {}

  goBack() {
    this.location.back();
  }
}
