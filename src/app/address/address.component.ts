import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

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

  constructor(private router:Router,private dataService:DataService) {}

  ngOnInit(): void {}

  clickPlaceOrder() {

    this.dataService.getProductDetails().subscribe(data=>{

      console.log(data)
    })

    this.router.navigate(['/order-confirmation'])

  }
}
