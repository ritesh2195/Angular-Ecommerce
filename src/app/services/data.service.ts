import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ProductDetails } from 'src/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public isCheckOutButtonClicked = new BehaviorSubject<boolean>(false)

  cartProductCounts:number = 0

  private dataSubject = new BehaviorSubject<any>(0)

  private productDetails = new BehaviorSubject<Array<ProductDetails>>([{name:'',price:'',count:0,image:''}])

  constructor() { }

  sendData(data:any){

    this.dataSubject.next(data)
  }

  getData(){

    return this.dataSubject.asObservable();
  }

  sendProductDetails(data:[ProductDetails]){

    const currentProductDetails = this.productDetails.getValue();

    if(currentProductDetails.length>0){

      currentProductDetails.length = 0
    }

    let updatedProductDetails = [...currentProductDetails, ...data];

    updatedProductDetails = [...new Set(updatedProductDetails)];

    this.productDetails.next(updatedProductDetails)
  }

  getProductDetails(){

    return this.productDetails.asObservable();
  }
}
