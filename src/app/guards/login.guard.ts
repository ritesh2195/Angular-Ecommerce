import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthSericeService } from '../services/auth-serice.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private authService:AuthSericeService,private router:Router){}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {

    if(localStorage.getItem('cookie')==='abcdef1234'){

      return true;
    }

    else{

      this.router.navigate(['/login'])
    }

    return false
  }
  
}
