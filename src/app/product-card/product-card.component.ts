import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  products:any[]=[]

  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    
    this.products=this.productService.getAllProducts()
  }

  clickAddToCart(){
  }

}
