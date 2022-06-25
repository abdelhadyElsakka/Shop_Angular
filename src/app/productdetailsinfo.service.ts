import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductdetailsinfoService {

  constructor(private _httpClient: HttpClient) { }

  getProductDetails(id:number):any{
    return this._httpClient.get("https://fakestoreapi.com/products/"+id)
  }
}
