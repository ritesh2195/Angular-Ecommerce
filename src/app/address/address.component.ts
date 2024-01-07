import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  addressesDetails = [
    {
      name: 'Ritesh',
      address: '123 Main Street, Cityville, Country',
    },
    {
      name: 'Pawan',
      address: '456 Oak Avenue, Townsville, Country',
    },
  ];

  selectedAddressIndex: number = 0;

  constructor(private router:Router) {}

  ngOnInit(): void {}

  clickPlaceOrder() {

    this.router.navigate(['/order-confirmation'])

  }
}
