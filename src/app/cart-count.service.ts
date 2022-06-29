import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class CartCountService {

  cartCount = new BehaviorSubject(0);
  currentCounter=0;
  foundProduct:any;

  productsArr:any=[];
  
  
  

  constructor() { }

  setNewCounter(count:number){
    this.cartCount.next(count)
   }

   getCounter(){
    return this.cartCount.asObservable(); 
   }

   addCart(id:number){
    this.foundProduct=this.productsArr.find((productCart:any) => productCart.itemId == id)
    if(this.foundProduct==undefined){
      const product={
        itemId:0,itemQuantity:0
      };
      product.itemId = id;
      product.itemQuantity=1;
      this.productsArr.push(product)
    }
    else{
      this.foundProduct.itemQuantity++
    }
    }

    getCart(){
      return this.productsArr;
    }
}
