import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { BehaviorSubject } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  products:any[]=[]

  cartProductCounts:number = 0

  constructor(private productService:ProductsService,private dataService:DataService) { }

  ngOnInit(): void {
    
    this.products=this.productService.getAllProducts()
  }

  clickAddToCart(product:any){

    this.cartProductCounts++

    this.dataService.sendData(this.cartProductCounts);

    this.dataService.sendProductDetails({
      name:product.name,
      price:product.price,
      count:this.cartProductCounts,
      image:product.image
      
    })

      // this.dataService.getProductDetails().subscribe(data=>{

      //   console.log(data)
      // })
  }

}
