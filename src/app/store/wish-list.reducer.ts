import { Wish } from '.././products';
import { createReducer, on } from '@ngrx/store';
import {
  addToWishList,
  removeWish,
} from './wish-list.action';

export const initialState: Wish[] = [];

export const wishListReducer = createReducer(
  initialState,
  on(addToWishList, (state , { id, image, title }) => state =  [...state, { id, image, title }]),
  on(removeWish, (state, { index }) => {
    let arr = [...state];

    arr.splice(index, 1);
    return arr;
  })
);
