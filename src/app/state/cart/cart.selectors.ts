import { createFeatureSelector } from '@ngrx/store';

export const selectItems = createFeatureSelector<Readonly<Item>>('cart');
