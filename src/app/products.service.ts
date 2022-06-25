import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Products } from './products'

@Injectable({
  providedIn: 'root'
})


export class ProductsService {

 

  productList:any;
  constructor(private _httpClient: HttpClient) {
    
   }

   getProducts() : Observable<any>{
    return this._httpClient.get("https://fakestoreapi.com/products") 
   }
}
