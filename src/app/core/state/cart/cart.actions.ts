import { createActionGroup, props } from '@ngrx/store';
import { CartItem } from 'src/@types/type';

export const cartActions = createActionGroup({
  source: 'Cart',
  events: {
    'Add item': props<{ item: CartItem }>(),
    Remove: props<{ item_id: string }>(),
    'Retrieved cart items': props<{ cart: CartItem[] }>(),
  },
});
