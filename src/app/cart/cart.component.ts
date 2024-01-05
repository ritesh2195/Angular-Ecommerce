import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productsDetails!: [{ name: string; price: string; count:number,image:string }];

  quantity!:number

  totalPrice!:number;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {

    this.dataService.getProductDetails().subscribe((data) => {
      
      this.productsDetails = data;

      if(data[0].name===''){

        data.shift()
      }

      this.quantity = data[0].count

      this.totalPrice = this.getTotalPrice()

    });
  }

  onClickRemoval(i:number){

    this.productsDetails.splice(i,1)

    this.dataService.sendData(--this.dataService.cartProductCounts)
  }

  getTotalPrice(){

    let sum:number = 0
    
    for(let i=0;i<this.productsDetails.length;i++){

      sum = sum+Number(this.productsDetails[i].price.substring(1))*this.productsDetails[i].count
    }

    return sum;
  }
}
