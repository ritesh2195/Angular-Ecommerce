import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataSubject = new Subject<any>()

  private productDetails = new BehaviorSubject<{
    name:string,
    price:string,
    count:number,
    image:string
  }>({name:'',price:'',count:0,image:''})

  constructor() { }

  sendData(data:any){

    this.dataSubject.next(data)
  }

  getData(){

    return this.dataSubject.asObservable();
  }

  sendProductDetails(data:{name:string,price:string,count:number,image:string}){

    this.productDetails.next(data)
  }

  getProductDetails(){

    return this.productDetails.asObservable();
  }
}
