import { CommonModule, Location } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageModule } from 'primeng/message';
import { CartItem, Item } from 'src/@types/type';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CartFacade } from 'src/app/core/state/cart/cart.facade';
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
  @Input({ required: false }) observation: string | null = '';
  @Input({ required: false }) item!: Item | null;
  @Output() onActionPressed = new EventEmitter<any>();

  quantity: number | null = 0;
  totalItems = 0;
  totalValue = 0;
  priceLabel: number | null = 0;
  levels = SYSTEM_LEVELS;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private notification: NotificationService,
    private cartFacade: CartFacade,
  ) {}

  ngOnInit() {
    if (this.systemLevel === SYSTEM_LEVELS.ITEM) {
    }
    if (this.systemLevel === SYSTEM_LEVELS.MENU) {
    }
    this.cartFacade.cart$.subscribe({
      next: (cart) => {
        this.totalItems = cart.length;
      },
    });
    this.cartFacade.totalValue$.subscribe({
      next: (value) => (this.totalValue = value),
    });
  }

  openCart() {
    this.router.navigate(['cart'], { relativeTo: this.route });
  }

  addItem() {
    if (this.item && this.quantity) {
      const cartItem: CartItem = {
        ...this.item,
        quantity: this.quantity,
        observation: this.observation,
      };

      this.cartFacade.add(cartItem);
      this.notification.showSuccess('Item adicionado ao carrinho!');
      this.location.back();
    }
    this.cartFacade.cart$.subscribe({ next: console.log });
  }

  updatePrice() {
    if (this.item && this.quantity) {
      this.priceLabel = this.item.price! * this.quantity;
    }
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
