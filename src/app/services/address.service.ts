import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AddressFields } from 'src/models/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private addressSubject = new BehaviorSubject<AddressFields[]>([{
    name: '',
    contact: '',
    pincode: '',
    locality: '',
    address: '',
    city: '',
    state: '',
    landmark: ''
  }])

  constructor() { }

  setAddress(data: AddressFields | AddressFields[]) {

    const currentAddresses = this.addressSubject.getValue();
  
    const dataArray = Array.isArray(data) ? data : [data];
  
    const updatedAddresses = [...currentAddresses, ...dataArray];
  
    this.addressSubject.next(updatedAddresses);
  }
  

  getAddress(){

    return this.addressSubject.asObservable()
  }
}
