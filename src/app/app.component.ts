import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { AuthSericeService } from './services/auth-serice.service';
import { Router } from '@angular/router';
import { DataService } from './services/data.service';
import { LoginServiceService } from './services/login-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-project';

  cartCount: any;

  isLoginHovered:boolean = false

  userName:string = 'Ritesh Mishra'

  constructor(
    private authService: AuthSericeService,
    private router: Router,
    private dataService: DataService,
    private loginService: LoginServiceService,
  ) {}

  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.cartCount = data;
    });

    this.userName = this.getLoggedUserName()
  }

  onMouseHover(){

    this.isLoginHovered = true
  }

  onMouseLeave(){

    this.isLoginHovered = false
  }

  isUserLoginIn() {
    return this.loginService.isUserLoggedIn();
  }

  clickLogin() {
    this.isLoginHovered = false
    this.router.navigate(['/login']);
  }

  onLogout() {
    this.router.navigate(['/dashboard']);

    this.authService.isUserLoggedIn = true;

    localStorage.removeItem('cookie');
  }

  onClickCart() {
    this.router.navigate(['/cart']);
  }

  onClickLogo() {
    this.router.navigate(['/product-card']);
  }
  clickProfile(){

    this.router.navigate(['/my-profile'])
  }

  getLoggedUserName(){

    return this.loginService.getLoggedInUserInfo().name
  }
}
