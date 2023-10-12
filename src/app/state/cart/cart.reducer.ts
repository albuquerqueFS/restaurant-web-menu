import { createReducer, on } from '@ngrx/store';
import { CartActions } from './cart.actions';

export const initialState: ReadonlyArray<Item> = [
  {
    id: '216f7ba8-c00a-4705-8183-8b5135ae853b',
    description: '',
    icon: '',
    name: '',
    price: 99.99,
  },
];

export const cartReducer = createReducer(
  initialState,
  on(CartActions.remove, (state, { item_id }) =>
    state.filter((item: Item) => item.id !== item_id),
  ),
  on(CartActions.addItem, (state, { item }) => {
    if (state.indexOf(item) > -1) return state;

    return [...state, item];
  }),
  on(CartActions.retrievedCartItems, (_state, { items }) => items),
);
