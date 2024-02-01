import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CartItem } from 'src/@types/type';
import { MenuService } from 'src/app/core/services/menu.service';
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
  ) {}

  ngOnInit(): void {
    this.restaurant$ = this.menuService.getRestaurantById(
      this.route.snapshot.paramMap.get('id') || '',
    );
    this.cartItems$ = this.cartFacade.cart$;
    this.cartTotal$ = this.cartFacade.totalValue$;
  }

  goBack() {
    this.location.back();
  }
}
