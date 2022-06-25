import { Component, OnInit } from '@angular/core';
import { CartCountService } from '../cart-count.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  counter:number=0;
  constructor(private _cartCountService:CartCountService) {
    this._cartCountService.getCounter().subscribe((res:any)=>{
      this.counter=res;
    })
   }

  ngOnInit(): void {
  }

}
 