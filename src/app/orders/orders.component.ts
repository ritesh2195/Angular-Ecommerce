import { Component, OnInit } from '@angular/core';
import { ProductDetails } from 'src/models/product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  productOrder!: ProductDetails[];

  constructor(private productService:ProductsService) { }

  ngOnInit(): void {

    this.productService.getOrder().subscribe(data=>{

      this.productOrder = data.filter(p=>p.name!=='')
    })
  }

}
