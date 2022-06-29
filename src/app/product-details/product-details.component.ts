import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartCountService } from '../cart-count.service';
import { ProductdetailsinfoService } from '../productdetailsinfo.service';
import { Products } from '../products';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})


export class ProductDetailsComponent implements OnInit {

  @Input('productData') 
  
  productData:any;

  sub:any;
  id:any;
  item:any;
  currentCounter:any;
  constructor(private route: ActivatedRoute, private _productDetailsInfoService:ProductdetailsinfoService,private _cartCOuntService:CartCountService) {
    this._cartCOuntService.getCounter().subscribe((res:any)=>{
      this.currentCounter=res
    })
    
  }

  

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      this.id = parseInt(params["id"]);
      
    });
    
    this.sub=this._productDetailsInfoService.getProductDetails(this.id).subscribe(
      (res:any)=>{
        console.log(res);
        this.item=res
      },
      (err:any)=>{
        console.log(err);
      }
    )


  }

  addCart(id:number){
    this._cartCOuntService.setNewCounter(++this.currentCounter),
    this._cartCOuntService.addCart(id)
  }

  ngOnDestory(){
    this.sub.unsubscribe();
  }

}
