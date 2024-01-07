import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  addressesDetails = [
    {
      name:'Ritesh',
      address:'123 Main Street, Cityville, Country'
    },
    {
      name:'Pawan',
      address:'456 Oak Avenue, Townsville, Country'
    }
  ]

  selectedAddressIndex:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  clickPlaceOrder() {

    console.log(this.selectedAddressIndex)
    
      const selectedAddress = this.addressesDetails[this.selectedAddressIndex];
      console.log('Selected Address:', selectedAddress.name, selectedAddress.address);
    
  }

}
