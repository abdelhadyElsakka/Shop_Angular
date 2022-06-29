import { Component, OnInit } from '@angular/core';
import { CartCountService } from '../cart-count.service';
import { ProductdetailsinfoService } from '../productdetailsinfo.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  counter:number=0;
  productsArr:any=[];
  productsArrInfo:any=[];
  sub:any;
  id:any;
  item:any;
  constructor(private _cartCountService:CartCountService, private _productDetailsInfoService:ProductdetailsinfoService) { 
    this._cartCountService.getCounter().subscribe((res:any)=>{
      this.counter=res;
    }),(err:any)=>{
      console.log(err);
    }  

    this.productsArr=this._cartCountService.getCart()
    
    this.productsArr.forEach((product:any)=>{
      this.sub=this._productDetailsInfoService.getProductDetails(product.itemId).subscribe(
        (res:any)=>{
          console.log(res);
          this.item=res
          this.productsArrInfo.push(this.item)
          console.log(this.productsArrInfo);
        },
        (err:any)=>{
          console.log(err);
        }
      )
    })
    
    
  }

  

  ngOnInit(): void {
  }

}
