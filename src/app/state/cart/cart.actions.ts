import { createActionGroup, props } from '@ngrx/store';

export const CartActions = createActionGroup({
  source: 'Cart',
  events: {
    'Add item': props<{ item: Item }>(),
    Remove: props<{ group_id: string; item_id: string }>(),
    'Retrieved cart items': props<{ items: ReadonlyArray<Item> }>(),
  },
});

// https://ngrx.io/guide/store/walkthrough
// https://www.youtube.com/watch?v=SkoI_VHtcTU
