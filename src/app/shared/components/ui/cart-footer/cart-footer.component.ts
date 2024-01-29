import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageModule } from 'primeng/message';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SYSTEM_LEVELS } from 'src/utils/constants';

@Component({
  selector: 'app-cart-footer',
  imports: [CommonModule, MessageModule],
  standalone: true,
  templateUrl: './cart-footer.component.html',
  styles: [],
})
export class CartFooterComponent {
  @Input({ required: true }) systemLevel: SYSTEM_LEVELS | null = null;
  @Input({ required: false }) itemPrice: number | null = 0;
  @Input({ required: false }) quantity: number | null = 0;
  @Input({ required: false }) observation: string | null = '';
  @Output() onActionPressed = new EventEmitter<any>();

  priceLabel: number | null = 0;
  levels = SYSTEM_LEVELS;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private notification: NotificationService,
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

  addItem() {
    console.log(this.observation);
    this.notification.showSuccess('Item adicionado ao carrinho!');
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
