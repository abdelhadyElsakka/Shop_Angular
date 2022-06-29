import { Wish } from '.././products';
import { createAction, props } from '@ngrx/store';

export const addToWishList = createAction(
  '[WishList] AddtoWishList',
  props<Wish>()
);

export const removeWish = createAction(
  '[WishList] removeWish',
  props<{ index: number }>()
);