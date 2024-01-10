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

    // Get the current array of addresses
    const currentAddresses = this.addressSubject.getValue();
  
    // Ensure data is an array
    const dataArray = Array.isArray(data) ? data : [data];
  
    // Create a new array by merging the current and new data
    const updatedAddresses = [...currentAddresses, ...dataArray];
  
    // Update the BehaviorSubject with the new array
    this.addressSubject.next(updatedAddresses);
  }
  

  getAddress(){

    return this.addressSubject.asObservable()
  }
}
