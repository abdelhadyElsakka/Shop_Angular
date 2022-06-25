import { Component, OnInit } from '@angular/core';
import  {Products}  from "../products";
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList:Array<Products>=[]

  constructor(private _ProductsService:ProductsService) { }

  ngOnInit(): void {

    this._ProductsService.getProducts().subscribe(
      (res:any)=>{
        this.productList=res
      },
      (err:any)=>{
        console.log(err);
      }
    )
    
  }

}
