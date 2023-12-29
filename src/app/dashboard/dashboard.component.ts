import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthSericeService } from '../services/auth-serice.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products = [];

  constructor(private router:Router, private authService:AuthSericeService
    ,private productService:ProductsService) { }

  ngOnInit(): void {

    this.products=this.productService.getAllProducts()
  }

  onLogout(){

    this.router.navigate(['/login'])

    localStorage.removeItem('cookie')

    this.authService.isUserLoggedIn=true
  }

}
