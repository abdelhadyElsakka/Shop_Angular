import { Wish } from '.././products';
import { createReducer, on } from '@ngrx/store';
import {
  addToWishList,
  removeWish,
} from './wish-list.action';

export const initialState: Wish[] = [];

export const wishListReducer = createReducer(
  initialState,
  on(addToWishList, (state, { id,  image, title }) => {
    let arr = [...state];

    let product = arr.find((e) => {
      return e.id == id;
    });

    if (product) {
      return state;
    } else {
      state = [...state, { id, image, title }];
      return state;
    }
  }),
  
  on(removeWish, (state, { index }) => {
    let arr = [...state];

    arr.splice(index, 1);
    return arr;
  })
);
