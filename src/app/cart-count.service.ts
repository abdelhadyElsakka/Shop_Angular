import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartCountService {

  cartCount = new BehaviorSubject(0);
  
  constructor() { }

  setNewCounter(count:number){
    this.cartCount.next(count)
   }

   getCounter(){
    return this.cartCount.asObservable(); 
   }

   
}
