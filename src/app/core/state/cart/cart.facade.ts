import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { cartActions } from './cart.actions';
import { Observable } from 'rxjs';
import { fromCart } from './cart.selectors';
import { Item } from 'src/@types/type';

@Injectable({ providedIn: 'root' })
export class CartFacade {
  #store = inject(Store);
  #isLoaded = false;

  get cart$(): Observable<Item[]> {
    this.#assertLoaded();
    return this.#store.select(fromCart.selectAll);
  }

  get itemsQuantity$(): Observable<number> {
    return this.#store.select(fromCart.selectItemsQuantity);
  }

  add(item: Item) {
    this.#store.dispatch(cartActions.addItem({ item }));
  }

  #assertLoaded() {
    if (!this.#isLoaded) {
      this.#isLoaded = true;
    }
  }
}