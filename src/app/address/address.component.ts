import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { ProductsService } from '../services/products.service';
import { ProductDetails } from 'src/models/product.model';

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

  constructor(
    private router: Router,
    private dataService: DataService,
    private orderService: ProductsService
  ) {}

  ngOnInit(): void {}

  clickPlaceOrder() {
    this.router.navigate(['/order-confirmation']);

    this.dataService.sendData(0);

    this.dataService.getProductDetails().subscribe((data) => {
      this.orderService.setOrder(data)

      //this.dataService.resetProductDetails()
    });
  }
}
