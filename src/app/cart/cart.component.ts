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

  isProductRemoved:boolean=false

  constructor(private dataService:DataService) { }

  ngOnInit(): void {

    console.log('Hi')

    this.dataService.getProductDetails().subscribe((data) => {
      
      this.productsDetails = data;

      if(data[0].name===''){

        data.shift()
      }

      this.quantity = data[0].count

    });
  }

  onClickRemoval(){

    this.isProductRemoved=true

    this.dataService.sendData(0)
  }
}
