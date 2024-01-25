import { createActionGroup, props } from '@ngrx/store';
import { Item } from 'src/@types/type';

export const cartActions = createActionGroup({
  source: 'Cart',
  events: {
    'Add item': props<{ item: Item }>(),
    Remove: props<{ group_id: string; item_id: string }>(),
    'Retrieved cart items': props<{ cart: Item[] }>(),
  },
});
