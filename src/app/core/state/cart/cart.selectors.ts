import { createSelector } from '@ngrx/store';
import { cartFeature } from './cart.reducer';
import { CartItem } from 'src/@types/type';

const selectAll = cartFeature.selectCart;

const selectById = (id: string) =>
  createSelector(selectAll, (state: CartItem[]) =>
    state.find((x) => x.id === id),
  );

const selectItemsQuantity = cartFeature.selectItems;

export const fromCart = {
  selectAll,
  selectById,
  selectItemsQuantity,
};
