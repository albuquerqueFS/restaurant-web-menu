import { createFeature, createReducer, on } from '@ngrx/store';
import { cartActions } from './cart.actions';
import { Item } from 'src/@types/type';

export interface State {
  cart: Item[];
  items: number;
}

export const initialState: State = {
  cart: [],
  items: 0,
};

export const cartFeature = createFeature({
  name: 'cart',
  reducer: createReducer(
    initialState,
    on(cartActions.remove, (state, { group_id, item_id }) => ({
      cart: state.cart.filter((item: Item) => item.id !== item_id),
      items: state.items - 1,
    })),
    on(cartActions.addItem, (state, { item }) => {
      if (state.cart.indexOf(item) > -1) return state;

      return { cart: [...state.cart, item], items: state.items + 1 };
    }),
    on(cartActions.retrievedCartItems, (state) => state),
  ),
});
