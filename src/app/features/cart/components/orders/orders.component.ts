import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { NgIconsModule } from '@ng-icons/core';
import { ConfirmationService } from 'primeng/api';
import { Observable } from 'rxjs';
import { CartItem } from 'src/@types/type';
import { CartFacade } from 'src/app/core/state/cart/cart.facade';
import { MenuService } from 'src/app/core/services/menu.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, ToastModule, ConfirmDialogModule, NgIconsModule],
  providers: [ConfirmationService],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  @Input() active = false;

  cartItems$: Observable<CartItem[]> = new Observable();
  restaurant$: Observable<any> = new Observable();
  cartTotal$: Observable<number> = new Observable();

  constructor(
    private location: Location,
    private cartFacade: CartFacade,
    private confirmationService: ConfirmationService,
    private menuService: MenuService,
    private route: ActivatedRoute,
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

  goBack() {
    this.location.back();
  }
}
