import { Component, OnInit, Input } from '@angular/core';
import  {Products}  from "../products";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input('productData') productData : any;

  constructor() { }

  ngOnInit(): void {
  }

}
