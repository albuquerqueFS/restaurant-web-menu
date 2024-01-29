import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SYSTEM_LEVELS } from 'src/utils/constants';

@Component({
  selector: 'app-cart-footer',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './cart-footer.component.html',
  styles: [],
})
export class CartFooterComponent {
  @Input({ required: true }) systemLevel: SYSTEM_LEVELS | null = null;
  @Input({ required: false }) itemPrice: number | null = 0;
  @Input({ required: false }) quantity: number | null = 0;
  @Output() onActionPressed = new EventEmitter<any>();

  priceLabel: number | null = 0;
  levels = SYSTEM_LEVELS;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    if (this.systemLevel === SYSTEM_LEVELS.ITEM) {
    }
    if (this.systemLevel === SYSTEM_LEVELS.MENU) {
    }
  }

  openCart() {
    this.router.navigate(['cart'], { relativeTo: this.route });
  }

  updatePrice() {
    this.priceLabel = this.quantity! * this.itemPrice!;
  }

  increase() {
    this.quantity! += 1;
    this.updatePrice();
  }

  decrease() {
    if (this.quantity! > 0) {
      this.quantity! -= 1;
      this.updatePrice();
    }
  }
}
