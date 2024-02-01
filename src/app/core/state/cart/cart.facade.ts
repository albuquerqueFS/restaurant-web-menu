import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { cartActions } from './cart.actions';
import { Observable, map } from 'rxjs';
import { fromCart } from './cart.selectors';
import { CartItem } from 'src/@types/type';

@Injectable({ providedIn: 'root' })
export class CartFacade {
  #store = inject(Store);
  #isLoaded = false;

  get cart$(): Observable<CartItem[]> {
    this.#assertLoaded();
    return this.#store.select(fromCart.selectAll);
  }

  get totalValue$(): Observable<number> {
    return this.#store
      .select(fromCart.selectAll)
      .pipe(
        map((items) =>
          items.reduce((acc, item) => acc + item.price * item.quantity, 0),
        ),
      );
  }

  get itemsQuantity$(): Observable<number> {
    return this.#store.select(fromCart.selectItemsQuantity);
  }

  add(item: CartItem) {
    this.#store.dispatch(cartActions.addItem({ item }));
  }

  #assertLoaded() {
    if (!this.#isLoaded) {
      this.#isLoaded = true;
    }
  }
}
