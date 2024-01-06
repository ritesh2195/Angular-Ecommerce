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

  @ViewChild('address')addressDetails!:ElementRef

  constructor() { }

  ngOnInit(): void {
  }

  getAddress(){

    console.log(this.addressDetails.nativeElement.value)
  }

}
