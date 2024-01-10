import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { ProductDetails } from 'src/models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productsDetails!: [ProductDetails];

  quantity!:number

  totalPrice!:number;

  constructor(private dataService:DataService, private router:Router) { }

  ngOnInit(): void {

    this.dataService.getProductDetails().subscribe((data) => {
      
      this.productsDetails = data;

      if(data[0].name===''){

        data.shift()
      }

      this.quantity = data[0].count

      this.calculateTotalPrice()

    });
  }

  onClickRemoval(i:number){

    this.productsDetails.splice(i,1)

    this.dataService.sendData(--this.dataService.cartProductCounts)
  }

  onClickCheckOut(){

    this.dataService.isCheckOutButtonClicked.next(true)

    this.router.navigate(['/address'])
  }

  onQuantityChange(index: number) {
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    let sum: number = 0;

    for (let i = 0; i < this.productsDetails.length; i++) {
      sum += Number(this.productsDetails[i].price.substring(1)) * this.productsDetails[i].count;
    }

    this.totalPrice = sum;
  }
}
