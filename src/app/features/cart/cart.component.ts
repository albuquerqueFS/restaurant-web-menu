import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Observable } from 'rxjs';
import { CartItem } from 'src/@types/type';
import { MenuService } from 'src/app/core/services/menu.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CartFacade } from 'src/app/core/state/cart/cart.facade';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems$: Observable<CartItem[]> = new Observable();
  restaurant$: Observable<any> = new Observable();
  cartTotal$: Observable<number> = new Observable();

  constructor(
    private location: Location,
    private cartFacade: CartFacade,
    private menuService: MenuService,
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService,
  ) {}

  ngOnInit(): void {
    this.restaurant$ = this.menuService.getRestaurantById(
      this.route.snapshot.paramMap.get('id') || '',
    );
    this.cartItems$ = this.cartFacade.cart$;
    this.cartTotal$ = this.cartFacade.totalValue$;
  }

  removeItem(event: any, item: CartItem) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Tem certeza que deseja remover este item do carrinho?',
      header: 'Tem certeza?',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      acceptIcon: 'none',
      rejectIcon: 'none',
      rejectButtonStyleClass: 'p-button-text',
      accept: () => {
        this.cartFacade.removeItem(item);
      },
      reject: () => {},
    });
  }

  finishOrder() {
    const phoneNumber = '11955306357'; // WhatsApp number in international format without '+'
    const message = encodeURIComponent(
      'Hello, I would like to chat with you on WhatsApp!',
    ); // URL-encoded message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappUrl, '_blank');
  }

  goBack() {
    this.location.back();
  }
}
