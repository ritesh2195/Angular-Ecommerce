import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthSericeService } from './services/auth-serice.service';
import { Router } from '@angular/router';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {

  title = 'angular-project';

  cartCount:any;

  constructor(private authService:AuthSericeService,private router:Router,
    private dataService:DataService){}

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    
    this.dataService.getData().subscribe((data) => {

      this.cartCount = data;
    });
  }

  isUserLoginIn(){

    return this.authService.isUserLoggedIn
  }

  clickLogin(){

    this.router.navigate(['/login'])
  }

  onLogout(){

    this.router.navigate(['/dashboard'])

    this.authService.isUserLoggedIn=true
  }

  onClickCart(){

    this.router.navigate(['/cart'])
  }
}
