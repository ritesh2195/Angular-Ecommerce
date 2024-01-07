import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public isCheckOutButtonClicked = new BehaviorSubject<boolean>(false)

  cartProductCounts:number = 0

  private dataSubject = new BehaviorSubject<any>(0)

  private productDetails = new BehaviorSubject<[{
    name:string,
    price:string,
    count:number,
    image:string
  }]>([{name:'',price:'',count:0,image:''}])

  constructor() { }

  sendData(data:any){

    this.dataSubject.next(data)
  }

  getData(){

    return this.dataSubject.asObservable();
  }

  sendProductDetails(data:[{name:string,price:string,count:number,image:string}]){

    this.productDetails.next(data)
  }

  getProductDetails(){

    return this.productDetails.asObservable();
  }
}
