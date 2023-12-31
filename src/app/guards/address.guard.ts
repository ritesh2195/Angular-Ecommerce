import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { ProductsService } from '../services/products.service';

@Injectable({
  providedIn: 'root'
})
export class AddressGuard implements CanActivate {

  constructor(private dataService:DataService,private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
   
      if(this.dataService.cartProductCounts>0){

        return true
      }

      this.router.navigate(['/cart'])

      return false
  }
  
}
