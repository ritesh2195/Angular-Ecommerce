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

  productDetails: [{ name: string, price: string, count: number, image: string }] = [ { name: '', price: '', count: 0, image: '' } ];

  constructor(private productService:ProductsService,private dataService:DataService) { }

  ngOnInit(): void {
    
    this.products=this.productService.getAllProducts()
  }

  clickAddToCart(product:any){

    let count = 0

    this.dataService.sendData(++this.dataService.cartProductCounts);

    this.cartProductCounts = this.dataService.cartProductCounts

    if(this.isContainsProduct(product)){

      this.productDetails.push({
        name:product.name,
        price:product.price,
        count:++count,
        image:product.image
        
      })
    }

    // this.productDetails.push({
    //   name:product.name,
    //   price:product.price,
    //   count:this.cartProductCounts,
    //   image:product.image
      
    // })

    this.dataService.sendProductDetails(this.productDetails)
  }

  isContainsProduct(fr:{ name: string, price: string, count: number, image: string }){

    for(let i=0;i<this.productDetails.length;i++){

        if(fr.name===this.productDetails[i].name){

            this.productDetails[i].count++
    
            return false
        }
    }

    return true
}

}
