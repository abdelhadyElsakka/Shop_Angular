import { Component, OnInit, Input } from '@angular/core';
import { CartCountService } from '../cart-count.service';
import { Store } from '@ngrx/store';
import { Wish } from '.././products';
import { addToWishList } from '../store/wish-list.action';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  tes:any;

  @Input('productData') productData : any;
 
  currentCounter:any
  constructor(private _cartCOuntService:CartCountService, private _store: Store<{ wishList: Wish[] }>) { 
    this._cartCOuntService.getCounter().subscribe((res:any)=>{
      this.currentCounter=res
    })
  }

  addCart(id:number){
    this._cartCOuntService.setNewCounter(++this.currentCounter),
    this._cartCOuntService.addCart(id)
  }

  addWish(id: number, image: string, title: string) {
    if (!this.productData.inWishList) {
      this.productData.inWishList = true;
      this._store.dispatch(addToWishList({ id, image, title }));
      console.log(id)
    }else{
      console.log("already There")
    }
  }
  
  
  ngOnInit(): void {
    this.productData.inWishList = false;
  }

}
