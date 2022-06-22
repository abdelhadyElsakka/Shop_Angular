import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../products';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  @Input('productData') productData:any;

  
  id:any;
  item:any;
  productsArr:Products[]=[]
  constructor(private _ProductsService:ProductsService,private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      this.id = parseInt(params["id"]);
      
    });
    this.productsArr=this._ProductsService.productList;

    this.item=this.productsArr.filter((item)=>{
      return item.id===this.id
    })

    console.log(this.item);



  }

}
