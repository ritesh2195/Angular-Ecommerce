import { Component } from '@angular/core';
import { AuthSericeService } from './services/auth-serice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-project';

  constructor(private authService:AuthSericeService,private router:Router){}

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
