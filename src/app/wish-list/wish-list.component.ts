import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeWish } from '../store/wish-list.action';
import { Wish } from '.././products';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

  wishList: Wish[] = [];
  constructor(private store: Store<{ wishList: Wish[] }>) {
    store.select('wishList').subscribe((res) => {
      this.wishList = res;
      console.log(res)
    });
  }

  ngOnInit(): void {}

  removeFromWishList(index: number) {
    this.store.dispatch(removeWish({ index }));
  }

}
