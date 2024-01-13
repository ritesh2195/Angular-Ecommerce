import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductDetails } from 'src/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private orderService = new BehaviorSubject<ProductDetails[]>([{name:'',price:'',count:0,image:''}])

  constructor() { }

  getAllProducts(){

    return JSON.parse(JSON.stringify(require("../../../src/test-data/products.json")))
  }

  setOrder(data:ProductDetails[]){

    this.orderService.next(data)
  }

  getOrder(){

    return this.orderService.asObservable()
  }
}
