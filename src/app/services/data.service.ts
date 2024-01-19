import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ProductDetails } from 'src/models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public isCheckOutButtonClicked = new BehaviorSubject<boolean>(false)

  cartProductCounts:number = 0

  private dataSubject = new BehaviorSubject<any>(0)

  private productDetails = new BehaviorSubject<Array<ProductDetails>>([{name:'',price:'',count:0,image:''}])

  constructor(private http:HttpClient) { }

  sendData(data:any){

    this.dataSubject.next(data)
  }

  getData(){

    return this.dataSubject.asObservable();
  }

  sendProductDetails(data:[ProductDetails]){

    const currentProductDetails = this.productDetails.getValue();

    let updatedProductDetails = [...currentProductDetails, ...data];

    //updatedProductDetails = [...new Set(updatedProductDetails)];

    updatedProductDetails = updatedProductDetails.filter(p=>p.name!=='')

    updatedProductDetails = this.updateProductCounts(updatedProductDetails)

    this.productDetails.next(updatedProductDetails)
  }

  getProductDetails(){

    return this.productDetails.asObservable();
  }

  updateProductCounts(products: ProductDetails[]): ProductDetails[] {
    const uniqueProducts: { [name: string]: ProductDetails } = {};
  
    for (const product of products) {
      if (uniqueProducts[product.name]) {
        // If the product already exists, add its count to the existing one
        uniqueProducts[product.name].count += product.count;
      } else {
        // If it's a new product, store it in the uniqueProducts object
        uniqueProducts[product.name] = { ...product };
      }
    }
  
    // Convert the object back to an array
    const result: ProductDetails[] = Object.values(uniqueProducts);

    result.filter(p=>p.name!=='')
  
    return result;
  }

  public resetProductDetails(): void {
    this.productDetails.next([]);
  }
}
