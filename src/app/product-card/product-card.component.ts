import { Component, OnInit, Input } from '@angular/core';
import { CartCountService } from '../cart-count.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input('productData') productData : any;
 
  currentCounter:any
  constructor(private _cartCOuntService:CartCountService) { 
    this._cartCOuntService.getCounter().subscribe((res:any)=>{
      this.currentCounter=res
    })
  }

  addCart(id:number){
    // this.productID.emit(id)
    this._cartCOuntService.setNewCounter(++this.currentCounter)
  }

  ngOnInit(): void {
  }

}
