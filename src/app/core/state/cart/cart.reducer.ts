import { createFeature, createReducer, on } from '@ngrx/store';
import { cartActions } from './cart.actions';
import { CartItem } from 'src/@types/type';

export interface State {
  cart: CartItem[];
  items: number;
}

export const initialState: State = {
  cart: [
    {
      id: '1',
      name: 'Big Mac',
      icon: 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kzXCTbnv/200/200/original?country=br',
      description:
        'Hamburguer, Pão uiribinguers, alface, tomate, queijo cheddar, molho uiribillens.',
      price: 19.99,
      quantity: 2,
      observation: 'Remover cebola e maionesa, CLIENTE É ALÉRGICO!',
    },
  ],
  items: 0,
};

export const cartFeature = createFeature({
  name: 'cart',
  reducer: createReducer(
    initialState,
    on(cartActions.remove, (state, { group_id, item_id }) => ({
      cart: state.cart.filter((item: CartItem) => item.id !== item_id),
      items: state.items - 1,
    })),
    on(cartActions.addItem, (state, { item }) => {
      if (state.cart.indexOf(item) > -1) return state;

      return { cart: [...state.cart, item], items: state.items + 1 };
    }),
    on(cartActions.retrievedCartItems, (state) => state),
  ),
});
