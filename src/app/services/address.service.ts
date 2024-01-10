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

  setAddress(data:AddressFields[]){

    this.addressSubject.next(data)
  }

  getAddress(){

    return this.addressSubject.asObservable()
  }
}
